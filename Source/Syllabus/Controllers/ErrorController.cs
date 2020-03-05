using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Syllabus.Models;
using System.Diagnostics;

namespace Syllabus.Controllers
{
    public class ErrorController : Controller
    {        
        public IActionResult Index() => View(new ErrorModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
