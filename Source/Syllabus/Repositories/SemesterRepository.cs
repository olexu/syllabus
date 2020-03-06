using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using Syllabus.Models;
using System.Collections.Generic;
using System.Data;
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
            using (IDbConnection dbConnection = new NpgsqlConnection(_connectionString))
            {
                dbConnection.Open();
                return await dbConnection.QueryAsync<Semester>("SELECT * FROM \"SEMESTERS\"");
            }
        }
    }
}
