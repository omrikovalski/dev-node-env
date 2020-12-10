using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace POC.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TesterController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public string Get()
        {
            return "Hello world!";
        }

        [HttpGet]
        [Route("{name}")]
        public string Get(string name)
        {
            return $"Hello {name}!!!";
        }
    }
}
