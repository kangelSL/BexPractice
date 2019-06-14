function getAccounts() {
  return [
    {
      id: 1,
      name: "Account1"
    },
    {
      id: 2,
      name: "Account2"
    },
    {
      id: 3,
      name: "Account3"
    },
    {
      id: 4,
      name: "Account4"
    },
    {
      id: 5,
      name: "Account5"
    }
  ];
}

function getData() {
  return {
    accounts: getAccounts()
  };
}

module.exports = getData;
