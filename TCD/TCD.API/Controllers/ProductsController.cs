using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TCD.API.Data;
using TCD.API.Models;

namespace TCD.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IRepository<Product> _genericRepository;
        private readonly IUnitOfWork _unitOfWork;

        public ProductsController(IRepository<Product> Repository, IUnitOfWork unitOfWork)
        {
            _genericRepository = Repository;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _genericRepository.GetAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var created = await _genericRepository.CreateAsync(product);

            if (created)
                _unitOfWork.Commit();

            return Created("Created", new { Response = StatusCode(201) });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var deleted = await _genericRepository.Delete(id);

            if (deleted)
                _unitOfWork.Commit();

            return Ok();

        }

    }
}
