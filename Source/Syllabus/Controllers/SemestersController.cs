using Microsoft.AspNetCore.Mvc;
using Syllabus.Repositories;
using System.Threading.Tasks;

namespace Syllabus.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SemestersController : ControllerBase
    {
        private readonly ISemesterRepository _semesterRepository;

        public SemestersController(ISemesterRepository semesterRepository) => _semesterRepository = semesterRepository;

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _semesterRepository.GetAllAsync());
        }
    }
}
