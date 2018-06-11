using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DotaDraftSimulator.Models;

namespace DotaDraftSimulator.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<Hero> heroList;
            using (var ctx = new HeroDb())
            {
                heroList = ctx.Heroes.ToList();
            }
            return View(heroList);
        }
    }
}