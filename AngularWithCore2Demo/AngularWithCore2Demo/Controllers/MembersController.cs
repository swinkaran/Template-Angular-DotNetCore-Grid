using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AngularWithCore2Demo.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AngularWithCore2Demo.Controllers
{
    [Produces("application/json")]
    [Route("api/Members")]
    public class MembersController : Controller
    {
        static List<Model.VMMember> Members;

        public MembersController()
        {
            // Assign values to Accounts
            Members = InitAccounts();
        }

        private List<VMMember> InitAccounts()
        {
            LoadMembersData();
            return Members;
        }

        // GET: api/Members
        [HttpGet]
        public List<Model.VMMember> Get()
        {
            return Members;
        }

        // GET: api/Members/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Members
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Members/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [NonAction]
        public void LoadMembersData()
        {
            using (StreamReader r = new StreamReader("Data/members.json"))
            {
                string json = r.ReadToEnd();
                Members = JsonConvert.DeserializeObject<List<Model.VMMember>>(json);
            }
        }
    }
}
