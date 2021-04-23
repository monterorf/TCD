using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TCD.Data.Models.Models;
using TCD.Data.UnitOfWork;

namespace TCD.API.Controllers
{
    public class StoresController : BaseController
    {
        #region Fields

        private readonly IUnitOfWork _unitOfWork;

        #endregion

        #region Ctor

        public StoresController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        #endregion

        #region Methods
        [HttpGet]
        public async Task<IEnumerable<Store>> Get()
        {
            return await _unitOfWork.GetRepository<Store>().GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<Store> Get(int id)
        {
            return await _unitOfWork.GetRepository<Store>().GetAsync(id);
        }

        [HttpPost]
        public async Task<int> Create(Store store)
        {
            await _unitOfWork.GetRepository<Store>().AddAsync(store);

            return await _unitOfWork.Save();
        }

        [HttpDelete("{id}")]
        public async Task<int> Delete(int id)

        {
            var storeFromRepo = await _unitOfWork.GetRepository<Store>().GetAsync(id);

            _unitOfWork.GetRepository<Store>().Delete(storeFromRepo);

            return await _unitOfWork.Save();

        }

        [HttpPut]
        public async Task<int> UpdateStoreAsync(Store updateStore)
        {
            _unitOfWork.GetRepository<Store>().Update(updateStore);

            return await _unitOfWork.Save();
        }
        #endregion
    }
}
