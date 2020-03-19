using Syllabus.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Syllabus.Repositories
{
    public interface IFormRepository
    {
        Task<IEnumerable<Form>> GetAllAsync();
    }
}
