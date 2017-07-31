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
    
    public partial class News
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tag { get; set; }
        public string Content { get; set; }
        public string Detail { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Title { get; set; }
        public Nullable<int> Priority { get; set; }
        public Nullable<bool> Active { get; set; }
        public Nullable<int> GroupNewsId { get; set; }
        public string Image { get; set; }
        public Nullable<int> Index { get; set; }
        public string UserId { get; set; }
    
        public virtual GroupNew GroupNew { get; set; }
        public virtual User_ User_ { get; set; }
    }
}
