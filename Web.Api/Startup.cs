
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Web.Api.Startup))]
namespace Web.Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}