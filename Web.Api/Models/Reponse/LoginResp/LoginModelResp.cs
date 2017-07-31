using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Api.Models.Reponse
{
    public class LoginModelResp
    {
        public string Username { get; set; }
        public string Token { get; set; }
    }
}