using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Syllabus.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Syllabus.Repositories
{
    public class SemesterRepository : ISemesterRepository
    {
        private readonly string _connectionString;

        public SemesterRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetValue<string>("AppSettings:ConnectionString");
        }

        public async Task<IEnumerable<Semester>> GetAllAsync()
        {
            using (var dbConnection = new MySqlConnection(_connectionString))
            {
                await dbConnection.OpenAsync();
                return await dbConnection.QueryAsync<Semester>("CALL SEMESTERS_GETALL");
            }
        }
    }
}
