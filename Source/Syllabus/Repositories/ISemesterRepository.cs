using Syllabus.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Syllabus.Repositories
{
    public interface ISemesterRepository
    {
        Task<IEnumerable<Semester>> GetAllAsync();
    }
}
