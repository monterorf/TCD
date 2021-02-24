using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TCD.API.Data
{
    public interface IUnitOfWork : IDisposable
    {
        DataContext Context { get; }
        void Commit();
    }
}
