const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engenieer = require('./lib/engineer')
const Intern = require('./lib/intern')


const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/engineer')

const myTeam = []
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
        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const officeNumber = data.officeNumber
            const teamManager = new Manager(name, id, email, officeNumber);
            myTeam.push(teamManager)
            console.log(myTeam)
            addTeamMember();
        })

}

addTeamManager();

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add new team members?',
            choices: ['Add Intern', 'Add Engineer', 'No, finish team'],
            name: 'teamMemberInfo'
        }
    ])
        .then(function (data) {
            if (data.teamMemberInfo === 'Add Engineer') {
                addEngineer()
            } else if (data.teamMemberInfo === 'Add Intern') {
                addIntern()
            }
        })
};



function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineers name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the Engineers id number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the Engineers email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the Engineers GitHub username?',
            name: 'github'
        },
    ])
        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const gitHub = data.github;
            const newEngineer = new Engineer(name, id, email, gitHub)
            myTeam.push(newEngineer)
            addTeamMember();

        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the interns id number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the interns email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the interns school name?',
            name: 'school'
        },
    ])
        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const newIntern = new Intern(name, id, email, school)
            console.log(newIntern)
            myTeam.push(newIntern)
            addTeamMember();

        })
}

