using System;
using System.Threading.Tasks;
using TCD.Data.Context;
using TCD.Data.Repositories;

namespace TCD.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        #region Fields

        private bool _disposed;
        private readonly DataContext _dbContext;

        #endregion

        #region Ctor

        public UnitOfWork(DataContext dbContext) =>
            _dbContext = dbContext;

        #endregion

        #region Methods

        public IRepository<T> GetRepository<T>() where T : class, new() =>
            new Repository<T>(_dbContext);

        public Task<int> Save() =>
            _dbContext.SaveChangesAsync();

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                    _dbContext.Dispose();
            }

            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        #endregion
    }
}
