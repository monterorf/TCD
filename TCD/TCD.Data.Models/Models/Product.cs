using System.ComponentModel.DataAnnotations;
using TCD.Data.Models.Models;

namespace TCD.Data.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public Category category { get; set; }
        [Required]
        public int CategoryId { get; set; }
    }
}