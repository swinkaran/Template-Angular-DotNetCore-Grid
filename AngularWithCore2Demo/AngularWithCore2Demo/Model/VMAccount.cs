using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWithCore2Demo.Model
{
    public class VMAccount
    {
        public VMAccount(long accountId, string accountName, decimal balance, bool isCreditAllowed)
        {
            AccountId = accountId;
            AccountName = accountName;
            Balance = balance;
            IsCreditAllowed = isCreditAllowed;
        }

        public long AccountId { get; set; }
        public string AccountName { get; set; }
        public decimal Balance { get; set; }
        public bool IsCreditAllowed { get; set; }
    }
}
