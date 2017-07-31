using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using Web.Api.Database;
using Web.Api.Models.Reponse;
using System.Linq;
using Web.Api.Common;
using Web.Api.Models.Reponse.SignupResp;

namespace Web.Api.Controllers
{
    [RoutePrefix("api/authentication")]
    public class AuthenticationController : ApiController
    {
        WebBanHangEntities db = new WebBanHangEntities();

        /// <summary>
        ///Authentication of login
        /// </summary>
        /// <returns></returns>        
        [HttpGet, Route("login")]
        public async Task<LoginModelResp> Login(LoginModelResq loginModelResq)
        {
            var loginResp = new LoginModelResp();

            var dbLogin = db.Customers.Where(c => c.UserName.ToUpper() == loginModelResq.Username.ToUpper()).FirstOrDefault();
            ErrorStatuses.ThrowBadRequest(Request, $"Invalid username and password", dbLogin == null);

            loginResp.Username = dbLogin.UserName;
            loginResp.Token = "abcssadjahduadiuada";

            return loginResp;
        }

        [HttpPost, Route("Signup")]
        public async Task<bool> Signup()
        {
            return true;
        }
    }
}