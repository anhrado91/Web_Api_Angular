using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Api.Models.Reponse.SignupResp
{
    public class SignupResq
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int Admin { get; set; }
        public int Ord { get; set; }
        public string Image { get; set; }
    }
}