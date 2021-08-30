using System;
using System.Collections.Generic;
using System.Text;

namespace TCD.Data.Models.Models
{
    public class StoreProduct
    {
        public int Id { get; set; }
        public Store store { get; set; }
        public int StoreId { get; set; }
        public Product product { get; set; }
        public int ProductId { get; set; }
        public decimal Quantity { get; set; }
    }
}
