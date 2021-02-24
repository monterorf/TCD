using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace TCD.API.Data
{
    public interface IRepository<T> where T : class
    {        
            Task<IEnumerable<T>> GetAsync();
            Task<IEnumerable<T>> GetAsync(Expression<Func<T, bool>> whereCondition = null,
                               Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
                               string includeProperties = "");
            Task<bool> CreateAsync(T entity);
            Task<bool> Delete(int Id);
        
    }
}
