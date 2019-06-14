using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace LupitasIceCream.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AllProducts()
        {
            ProductRepository repo = new ProductRepository();
            List<Models.Product> products = repo.GetAllProducts();

            return View(products);
        }
        public IActionResult NewProducts()
        {
            return View();
        }
    }
}
