using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using LupitasIceCream.Models;


namespace LupitasIceCream
{
    public class ProductRepository
    {
        public List<Product> GetAllProducts()
        {
            MySqlConnection conn = new MySqlConnection();
            conn.ConnectionString = System.IO.File.ReadAllText("ConnectionString.txt");

            MySqlCommand cmd = conn.CreateCommand();

            cmd.CommandText =
                "SELECT Name, Price FROM products;";
            using (cmd.Connection)
            {
                cmd.Connection.Open();

                List<Product> result = new List<Product>();

                MySqlDataReader dataReader = cmd.ExecuteReader();

                while (dataReader.Read())
                {
                    Product newProduct = new Product();
                    newProduct.Name = dataReader.GetString("Name");
                    newProduct.Price = dataReader.GetDecimal("Price");

                    result.Add(newProduct);
                }
                return result;
            }
        }
    }
}
