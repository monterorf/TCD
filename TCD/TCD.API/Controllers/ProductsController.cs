﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TCD.Data.Models;
using TCD.Data.UnitOfWork;

namespace TCD.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        #region Fields

        private readonly IUnitOfWork _unitOfWork;

        #endregion

        #region Ctor

        public ProductsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
            

        #endregion

        #region Methods

        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _unitOfWork.GetRepository<Product>().GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<Product> Get(int id)
        {
            return await _unitOfWork.GetRepository<Product>().GetAsync(id);
        }

        [HttpPost]
        public async Task<int> Create(Product product)
        {
            await _unitOfWork.GetRepository<Product>().AddAsync(product);

            return await _unitOfWork.Save();
        }

        [HttpDelete]
        public async Task<int> Delete(Product product)
        {
            _unitOfWork.GetRepository<Product>().Delete(product);

            return await _unitOfWork.Save();
        }

        [HttpPut]
        public async Task<int> UpdateDepartmentAsync(Product updateProduct)
        {
            _unitOfWork.GetRepository<Product>().Update(updateProduct);

            return await _unitOfWork.Save();
        }

        #endregion

    }
}
