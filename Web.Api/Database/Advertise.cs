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
    
    public partial class Advertise
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public Nullable<int> Width { get; set; }
        public Nullable<int> Height { get; set; }
        public string Link { get; set; }
        public string Target { get; set; }
        public string Content { get; set; }
        public Nullable<short> Position { get; set; }
        public Nullable<int> Click { get; set; }
        public Nullable<int> Ord { get; set; }
        public Nullable<bool> Active { get; set; }
        public string UserId { get; set; }
    
        public virtual User_ User_ { get; set; }
    }
}
