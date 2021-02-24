using System.ComponentModel.DataAnnotations;

namespace TCD.API.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
