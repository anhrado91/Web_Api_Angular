using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web.Api.Controllers
{
    public class HomeController : ApiController
    {
        [HttpGet, Route("")]
        public string Index()
        {
            return $"Welcom webSite Api";
        }
    }
}