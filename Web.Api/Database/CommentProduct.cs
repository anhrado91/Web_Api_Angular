//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Web.Api.Database
{
    using System;
    using System.Collections.Generic;
    
    public partial class CommentProduct
    {
        public int Id { get; set; }
        public Nullable<int> ProductId { get; set; }
        public string Title { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<int> Active { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
    }
}
