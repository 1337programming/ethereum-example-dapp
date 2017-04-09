var Conference = artifacts.require("./Conference.sol");

contract('Conference', function (accounts) {
  it("should assert true", function () {
    assert.isTrue(true);
  });
  
  it("Initial conference settings should match", function () {
    return Conference.deployed().then(function (instance) {
      var p1 = instance.numRegistrants.call(accounts[0]);
      var p2 = instance.organizer.call(accounts[0]);
      var p3 = instance.quota.call(accounts[0]);
      return Promise.all([p1, p2, p3]);
    }).then(function (values) {
      assert.equal(values[0], 0, "Registrants should be zero!");
      assert.equal(values[1], accounts[0], "Owner doesn't match!");
      assert.equal(values[2], 500, "Quota doesn't match!");
    });
  });
  
  it("Should update quota", function () {
    return Conference.deployed().then(function (instance) {
      instance.quota.call(accounts[0]).then(
        function (quota) {
          assert.equal(quota, 500, "Quota doesn't match!");
        }).then(
        function () {
          return instance.changeQuota(300);
        }).then(
        function (result) {
          console.log(result);
          // printed will be a long hex, the transaction hash
          return instance.quota.call(accounts[0]);
        }).then(
        function (quota) {
          assert.equal(quota, 300, "New quota is not correct!");
        })
    });
  });
  
  it("Should let you buy a ticket", function () {
    return Conference.deployed().then(function (instance) {
      var ticketPrice = web3.toWei(.05, 'ether');
      var initialBalance = web3.eth.getBalance(instance.address).toNumber();
      instance.buyTicket({from: accounts[1], value: ticketPrice}).then(
        function () {
          var newBalance = web3.eth.getBalance(instance.address).toNumber();
          var difference = newBalance - initialBalance;
          assert.equal(difference, ticketPrice, "Difference should be what was sent");
          return instance.numRegistrants.call();
        }).then(
        function (num) {
          assert.equal(num, 1, "there should be 1 registrant");
          return instance.registrantsPaid.call(accounts[1]);
        }).then(
        function (amount) {
          assert.equal(amount.toNumber(), ticketPrice, "Sender's paid but is not listed");
        });
    });
  });
  
  it("Should issue a refund by owner only", function () {
    return Conference.deployed().then(function (instance) {
      var ticketPrice = web3.toWei(.05, 'ether');
      var initialBalance = web3.eth.getBalance(instance.address).toNumber();
      instance.buyTicket({from: accounts[1], value: ticketPrice}).then(
        function () {
          var newBalance = web3.eth.getBalance(instance.address).toNumber();
          var difference = newBalance - initialBalance;
          assert.equal(difference, ticketPrice, "Difference should be what was sent");
          return instance.refundTicket(accounts[1], ticketPrice, {from: accounts[1]});
        }).then(
        function () {
          var balance = web3.eth.getBalance(instance.address).toNumber();
          assert.equal(web3.toBigNumber(balance), ticketPrice, "Balance should be unchanged");
          // Now try to issue refund as organizer/owner - should work
          return instance.refundTicket(accounts[1], ticketPrice, {from: accounts[0]});
        }).then(
        function () {
          var postRefundBalance = web3.eth.getBalance(instance.address).toNumber();
          assert.equal(postRefundBalance, initialBalance, "Balance should be initial balance");
        });
    });
  });
  
});
