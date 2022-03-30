using Microsoft.EntityFrameworkCore.Migrations;

namespace TCD.Data.Migrations
{
    public partial class PopulateProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(table: "Products",
           columns: new string[] { "Name", "Description", "CategoryId" },
           values: new object[,]
           {
                {"Manzana Gala","Manzana Gala",1},
                {"Platano Portalimón","Platano Portalimón",1},
                {"Mandarina","Mandarina",1},
                {"Durazno","Durazno",1},
                {"Naranja Valencia","Naranja Valencia",1},
                {"Uva Roja","Uva Roja",1},
                {"Uva Verde","Uva Verde",1},
                {"Manzana Verde","Manzana Verde",1}
            }
           );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
