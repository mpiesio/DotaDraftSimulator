using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DotaDraftSimulator.Models
{
    public class HeroDb : DbContext
    {
        public DbSet<Hero> Heroes { get; set; }
    }
}