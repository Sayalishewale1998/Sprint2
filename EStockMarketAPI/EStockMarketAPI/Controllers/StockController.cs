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
    public class StockController : ControllerBase
    {
        EStockMarketDBContext db;
        public StockController(EStockMarketDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        [Route("get")]
        //user can get the details of stock start end date
        public IEnumerable<TblStock> GetStocks()
        {
            return db.TblStocks;
        }
        [HttpPost]
        //company can add the stock
        public string Post([FromBody] TblStock tblStock)
        {
            db.TblStocks.Add(tblStock);
            db.SaveChanges();
            return "success";
        }
        [HttpPut]
        public string Put([FromBody] TblStock tblStock)
        {
            var tblSampleObj = db.TblStocks.Where(x => x.Id == tblStock.Id);
            if (tblSampleObj !=null)
            {
                db.TblStocks.Update(tblStock);
                db.SaveChanges();
                return "Success";
            }
            return "Fail";
        }
        [HttpDelete]
        public string Delete([FromBody] int Id)
        {
            var tblSampleObj = db.TblStocks.Where(x => x.Id == Id).FirstOrDefault();
            if (tblSampleObj != null)
            {
                db.TblStocks.Remove(tblSampleObj);
                db.SaveChanges();
                if (tblSampleObj == null)
                {

                }
                return "Success";
            }
            return "Fail";

        }
    }
}
