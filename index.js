const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engenieer = require('./lib/engineer')
const Intern = require('./lib/intern')


const inquirer = require('inquirer')
const fs = require('fs')


function addTeamManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team managers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your team managers id number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your team managers email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your team managers office number?',
            name: 'officeNumber',
        },
    ])
}

addTeamManager();
