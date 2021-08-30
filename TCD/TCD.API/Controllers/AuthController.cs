using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TCD.Data.Models.Models;
using TCD.Data.UnitOfWork;

namespace TCD.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseController
    {
        #region Fields

        private readonly IUnitOfWork _unitOfWork;

        #endregion

        #region Ctor

        public AuthController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        #endregion

        #region Methods

        [HttpGet]
        public async Task<IEnumerable<User>> Get()
        {
            return await _unitOfWork.GetRepository<User>().GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<User> Get(int id)
        {
            return await _unitOfWork.GetRepository<User>().GetAsync(id);
        }

        //[HttpPost("login")]
        //public async Task<IActionResult> Login(User user)
        //{
        //    var userfromRepo = await _unitOfWork.GetRepository<User>().GetWhereAsync(x => x.Username == user.Username && x.password == user.password);

        //    if (userfromRepo == null)
        //        return Unauthorized();

        //    return Ok(new
        //    {
        //        userfromRepo
        //    });
        //}

        [HttpPost]
        public async Task<int> Create(User user)
        {
            await _unitOfWork.GetRepository<User>().AddAsync(user);

            return await _unitOfWork.Save();
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<int> Delete(int id)

        {
            var UserFromRepo = await _unitOfWork.GetRepository<User>().GetAsync(id);

            _unitOfWork.GetRepository<User>().Delete(UserFromRepo);

            return await _unitOfWork.Save();

        }

        [HttpPut]
        public async Task<int> UpdateUserAsync(User updateUser)
        {
            _unitOfWork.GetRepository<User>().Update(updateUser);

            return await _unitOfWork.Save();
        }

        #endregion
    }
}
