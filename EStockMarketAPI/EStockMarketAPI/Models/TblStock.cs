using System;
using System.Collections.Generic;

#nullable disable

namespace EStockMarketAPI.Models
{
    public partial class TblStock
    {
        public int Id { get; set; }
        public string CompanyCode { get; set; }
        public string CompanyName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? StockPrice { get; set; }
        public int? StockQuantity { get; set; }
    }
}
