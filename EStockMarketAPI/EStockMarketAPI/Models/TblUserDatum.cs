using System;
using System.Collections.Generic;

#nullable disable

namespace EStockMarketAPI.Models
{
    public partial class TblUserDatum
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public long? StockPrice { get; set; }
        public int? StockQuantity { get; set; }
        public long? GrandTotal { get; set; }
    }
}
