using System;
using System.Collections.Generic;

#nullable disable

namespace EStockMarketAPI.Models
{
    public partial class TblUser
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserEmail { get; set; }
        public string CompanyName { get; set; }
        public double? StockPrice { get; set; }
        public DateTime? DateandTime { get; set; }
    }
}
