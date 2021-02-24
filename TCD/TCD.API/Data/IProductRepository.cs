using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TCD.API.Models;

namespace TCD.API.Data
{
    public interface IProductRepository
    {
        void CreateProduct(Product product);
        Task<List<Product>> GetProducts();
        Task<Product> GetProduct(int Id);
        Task<Product> EditProduct(int Id, Product product);
        void DeleteProduct(int Id);
        Task<bool> SaveAll();
    }
}
