using EStockMarketAPI.Interfaces;
using EStockMarketAPI.Models;
using EStockMarketAPI.ViewModels;
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
    public class LoginController : ControllerBase
    {
        EStockMarketDBContext db;
        IJWTManagerRepository iJWTManagerRepository;
        public LoginController(EStockMarketDBContext _db,IJWTManagerRepository _iJWTManagerRepository)
        {
            db = _db;
            iJWTManagerRepository = _iJWTManagerRepository;
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginViewModel loginViewModel)
        {
            var token = iJWTManagerRepository.Authenicate(loginViewModel, false);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }
        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterViewModel registerViewModel)
        {
            LoginViewModel login = new LoginViewModel();
            login.UserName = registerViewModel.UserName;
            login.Password = registerViewModel.Password;
            var token = iJWTManagerRepository.Authenicate(login, true);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }
    }
}
