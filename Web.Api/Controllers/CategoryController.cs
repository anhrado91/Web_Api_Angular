using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.Api.Database;

namespace Web.Api.Controllers
{
    [RoutePrefix("api/Category")]
    public class CategoryController : ApiController
    {
        WebBanHangEntities db = new WebBanHangEntities();

        /// <summary>
        ///Get all Category 
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route("")]
        public IList<Category> GetCategories()
        {
            var cate = db.Categories.ToList();
            return cate;
        }



    }
}