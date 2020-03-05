using Microsoft.AspNetCore.Mvc;
using Moq;
using Syllabus.Controllers;
using Syllabus.Models;
using Syllabus.Repositories;
using System.Threading.Tasks;
using Xunit;

namespace Syllabus.Tests.Controllers
{
    public class SemestersTest
    {
        [Fact]
        public async Task Semesters_Get_Success()
        {
            // arrange
            var semestersRepositoryMock = new Mock<ISemesterRepository>();
            semestersRepositoryMock
                .Setup(r => r.GetAllAsync())
                .ReturnsAsync(new Semester[] { new Semester() });

            // act
            var semestersController = new SemestersController(semestersRepositoryMock.Object);
            var result = await semestersController.Get();

            // assert
            Assert.IsType<OkObjectResult>(result);
            var items = ((OkObjectResult)result).Value as Semester[];
            Assert.Single(items);
        }
    }
}
