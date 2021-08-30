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
    public class CategoriesController : BaseController
    {
        #region Fields

        private readonly IUnitOfWork _unitOfWork;

        #endregion

        #region Ctor

        public CategoriesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        #endregion

        #region Methods
        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<Category>> Get()
        {
            return await _unitOfWork.GetRepository<Category>().GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<Category> Get(int id)
        {
            return await _unitOfWork.GetRepository<Category>().GetAsync(id);
        }

        [HttpPost]
        public async Task<int> Create(Category category)
        {
            await _unitOfWork.GetRepository<Category>().AddAsync(category);

            return await _unitOfWork.Save();
        }
        
        [HttpDelete("{id}")]
        public async Task<int> Delete(int id)

        {
            var CategoryFromRepo = await _unitOfWork.GetRepository<Category>().GetAsync(id);

            _unitOfWork.GetRepository<Category>().Delete(CategoryFromRepo);

            return await _unitOfWork.Save();

        }

        [HttpPut]
        public async Task<int> UpdateDepartmentAsync(Category updateCategory)
        {
            _unitOfWork.GetRepository<Category>().Update(updateCategory);

            return await _unitOfWork.Save();
        }

        #endregion
    }
}
