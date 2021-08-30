using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using TCD.Data.Context;
using TCD.Data.Models.DTOs;
using TCD.Data.Models.Interfaces;
using TCD.Data.Models.Models;
using TCD.Data.UnitOfWork;

namespace TCD.API.Controllers
{
    public class AccountController : BaseController
    {
        #region Fields

        private readonly IUnitOfWork _unitOfWork;
        private readonly ITokenService _tokenService;

        #endregion

        #region Ctor

        public AccountController(IUnitOfWork unitOfWork, ITokenService tokenService)
        {
            _unitOfWork = unitOfWork;
            _tokenService = tokenService;
        }


        #endregion

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.Username)) return BadRequest("Username is already taken");


            using var hmac = new HMACSHA512();

            var user = new User
            {
                Username = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };
            await _unitOfWork.GetRepository<User>().AddAsync(user);
            await _unitOfWork.Save();

            return new UserDto
            {
                Username = user.Username,
                Token = _tokenService.CreateToken(user)
            };

        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _unitOfWork.GetRepository<User>()
                .Find(x => x.Username == loginDto.Username);

            if (user == null) return Unauthorized("Invalid username");

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for(int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
            }

            return new UserDto
            {
                Username = user.Username,
                Token = _tokenService.CreateToken(user)
            };


        }
        private async Task<bool> UserExists(string username)
        {
            var exists = await _unitOfWork.GetRepository<User>()
                .GetWhereAsync(x => x.Username == username.ToLower());

            if (exists.Count()>0)
                return true;
            return false;
        }
    }
}
