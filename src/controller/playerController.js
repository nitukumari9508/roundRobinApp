const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'number',
      name: 'numPlayers',
      message: 'Enter the number of players:',
      validate: function(value) {
        if (value < 2) {
          return 'Number of players must be at least 2.';
        }
        return true;
      }
    },
    {
      type: 'number',
      name: 'numGroups',
      message: 'Enter the number of groups:',
      validate: function(value) {
        if (value < 1) {
          return 'Number of groups must be at least 1.';
        }
        return true;
      }
    }
  ])
  .then(answers => {
    const numPlayers = answers.numPlayers;
    const numGroups = answers.numGroups;
    // TODO: Call other functions to generate fixture
  });
