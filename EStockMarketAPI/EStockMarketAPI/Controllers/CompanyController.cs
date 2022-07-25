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
    public class CompanyController : ControllerBase
    {
        EStockMarketDBContext db;
        public CompanyController(EStockMarketDBContext _db)
        {
            db = _db;
        }
        [HttpGet]

        [Route("getall")]
        public IEnumerable<TblCompany> GetCompanies()
        {
            return db.TblCompanies;
        }
        [HttpPost]

        public string Post([FromBody] TblCompany tblCompany)
        {
            if (tblCompany.CompanyTurnover > 100000000)
            {
                db.TblCompanies.Add(tblCompany);
                db.SaveChanges();
                return "success";
            }
            else
            {
                return "Company Turnover must be greater than 10Cr";
            }

        }
        [HttpDelete]
        public string Delete([FromBody] string CompanyCode)
        {
            var delobj = db.TblCompanies.Where(x => x.CompanyCode == CompanyCode).FirstOrDefault();
            if (delobj == null)
            {
                db.TblCompanies.Remove(delobj);
                db.SaveChanges();
                return "Success";
            }
            return "Fail";
        }
    }
}






    