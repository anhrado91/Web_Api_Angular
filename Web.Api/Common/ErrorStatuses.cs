using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web.Api.Common
{
    public class ErrorStatuses
    {
        public static void ThrowBadRequest(bool when, Action on = null)
        {
            if (when)
            {
                if (on != null) on();
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
        }

        public static void ThrowBadRequest(HttpRequestMessage request, string message, bool when, Action on = null)
        {
            if (when)
            {
                if (on != null) on();
                throw new HttpResponseException(request.CreateErrorResponse(HttpStatusCode.BadRequest, message));
            }
        }

        public static void ThrowBadRequest()
        {
            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        public static void ThrowBadRequest(HttpRequestMessage request, string message)
        {
            throw new HttpResponseException(request.CreateErrorResponse(HttpStatusCode.BadRequest, message));
        }
    }
}