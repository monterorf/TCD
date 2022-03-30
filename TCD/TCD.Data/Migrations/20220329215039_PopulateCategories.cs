using Microsoft.EntityFrameworkCore.Migrations;

namespace TCD.Data.Migrations
{
    public partial class PopulateCategories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           migrationBuilder.InsertData(table: "Categories",
           columns: new string[] {"Name", "Description" },
           values: new object[,]
           {                
                {"Frutas","Frutas"},
                {"Lácteos","Lácteos"},
                {"Abarrotes","Abarrotes"},
                {"Cuidado Personal","Cuidado Personal"},
                {"Granos","Granos"}
            }
           );

           
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
