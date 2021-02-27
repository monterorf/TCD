using System;
using System.Threading.Tasks;
using TCD.Data.Repositories;

namespace TCD.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<T> GetRepository<T>() where T : class, new();
        Task<int> Save();
    }
}
