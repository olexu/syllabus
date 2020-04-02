using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using Syllabus.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Syllabus.Repositories
{
    public class FormRepository : IFormRepository
    {
        private readonly string _connectionString;

        public FormRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetValue<string>("AppSettings:ConnectionString");
        }

        public async Task<IEnumerable<Form>> GetAllAsync()
        {
            using (var dbConnection = new MySqlConnection(_connectionString))
            {
                await dbConnection.OpenAsync();
                return await dbConnection.QueryAsync<Form>("CALL FORMS_GETALL");
            }
        }
    }
}
