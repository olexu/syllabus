using Microsoft.AspNetCore.Mvc;
using Syllabus.Repositories;
using System.Threading.Tasks;

namespace Syllabus.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FormsController : ControllerBase
    {
        private readonly IFormRepository _formRepository;

        public FormsController(IFormRepository formRepository) => _formRepository = formRepository;

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _formRepository.GetAllAsync());
        }
    }
}
