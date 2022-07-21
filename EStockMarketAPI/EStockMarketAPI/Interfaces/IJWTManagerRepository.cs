using EStockMarketAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EStockMarketAPI.Interfaces
{
   public interface IJWTManagerRepository
    {
        Tokens Authenicate(LoginViewModel users, bool IsRegister);
    }
}
