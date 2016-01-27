using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestNav.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Navigation Test Page";
            ViewBag.Message = "Start Page";

            return View();
        }
        public ActionResult About()
        {
            ViewBag.Title = "Navigation Test Page";
            ViewBag.Message = "About Page";

            return View();
        }
    }
}
