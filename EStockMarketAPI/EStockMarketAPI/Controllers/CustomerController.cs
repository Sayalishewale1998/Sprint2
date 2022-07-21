using EStockMarketAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EStockMarketAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        EStockMarketDBContext db;
        public CustomerController(EStockMarketDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        //user can get the details of stock start end date
        public IEnumerable<TblCustomer> GetCustomers()
        {
            return db.TblCustomers;
        }
        [HttpPost]
        //company can add the stock
        public string Post([FromBody] TblCustomer tblCustomer)
        {
            db.TblCustomers.Add(tblCustomer);
            db.SaveChanges();
            return "success";
        }
    }
}
