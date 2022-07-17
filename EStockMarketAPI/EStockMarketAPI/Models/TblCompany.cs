using System;
using System.Collections.Generic;

#nullable disable

namespace EStockMarketAPI.Models
{
    public partial class TblCompany
    {
        public int Id { get; set; }
        public string CompanyCode { get; set; }
        public string CompanyName { get; set; }
        public string CompanyCeo { get; set; }
        public long? CompanyTurnover { get; set; }
        public string CompanyWebsite { get; set; }
        public string StockExchange { get; set; }
        public string CompanyLogo { get; set; }
    }
}
