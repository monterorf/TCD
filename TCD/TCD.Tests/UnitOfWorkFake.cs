using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCD.Data.Models.Models;
using TCD.Data.Repositories;
using TCD.Data.UnitOfWork;

namespace TCD.Tests
{
    public class UnitOfWorkFake : IUnitOfWork
    {
        #region Fields
        private bool _disposed;
        private readonly List<Category> _dbContext;
        #endregion

        #region Constructor
        public UnitOfWorkFake()
        {
            _dbContext = new List<Category>()
            {
                new Category() {Id = 1, Description ="Frutas ", Name = "Frutas"},
                new Category() {Id = 1, Description ="Verduras ", Name = "Verduras"},
                new Category() {Id = 1, Description ="Lacteos ", Name = "Lacteos"}
            };
        }
        #endregion

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IRepository<T> GetRepository<T>() where T : class, new()
        {
            throw new NotImplementedException();
        }

        public Task<int> Save()
        {
            throw new NotImplementedException();
        }
    }
}
