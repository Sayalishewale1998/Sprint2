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

        public IEnumerable<TblCompany> GetCompanies()
        {
            return db.TblCompanies;
        }
        [HttpPost]
        public string Post([FromBody] TblCompany tblcompany)
        {
            if (tblcompany.CompanyTurnover > 1000000000)
            {
                db.TblCompanies.Add(tblcompany);
                db.SaveChanges();
                return "success";
            }
            else
            {
                return "Company turnover should be greater than 10cr";
            }

        }
        [HttpPut]

        public string Put([FromBody] TblCompany tblCompany)
        {
            var companyobj = db.TblCompanies.Where(x => x.CompanyCode == tblCompany.CompanyCode);
            if(companyobj != null)
            {
                db.TblCompanies.Update(tblCompany);
                db.SaveChanges();
                return "Success";
            }
            return "Fail";
        }
        [HttpDelete]

        public string Delete([FromBody] string CompanyCode)
        {
            var companyobj = db.TblCompanies.Where(x => x.CompanyCode == CompanyCode).FirstOrDefault();
            if(companyobj != null)
            {
                db.TblCompanies.Remove(companyobj);
                db.SaveChanges();
                return "Success";
            }
            return "Fail";
        }

    }
}
