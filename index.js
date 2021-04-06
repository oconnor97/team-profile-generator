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
            addTeamMember();
        })

}

addTeamManager();

// The beginning prompts for adding a Team Manager
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
            } else { generateHtml() }
        })
};


// Prompts to add a new Engineer
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
            const github = data.github;
            const newEngineer = new Engineer(name, id, email, github)
            myTeam.push(newEngineer)
            addTeamMember();

        })
}
// The prompts for a new intern
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
            myTeam.push(newIntern)
            addTeamMember();

        })
}


// funtion to generate the HTML file, Worked with a TA to get this working!!
function generateHtml() {
    console.log("Building your team.....")
    const htmlArray = []
    const firstHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css">
    <title>Document</title>
</head>

<body>
    <header>
        <h2>My Team</h2>
    </header>
    <div class="container"> `
    htmlArray.push(firstHtml);


    for (let i = 0; i < myTeam.length; i++) {
        let newCard = `
        <div class="card-body">
        <div class="card-header">
            <h3 id="larger">${myTeam[i].name}</h3>
            <h3>${myTeam[i].role}</h3>
        </div>
        <div class="card-text">
            <p>Id: ${myTeam[i].id}</p>
            <p>Email:<a href="mailto:${myTeam[i].email}?subject=subject text">${myTeam[i].email}</a></p>`
        if (myTeam[i].officeNumber) {
            newCard += `
                <p>Office Number: ${myTeam[i].officeNumber}</p>`
        } else if (myTeam[i].github) {
            newCard += `
            <p>Github:<a href="https://github.com/${myTeam[i].github}" target="_blank">${myTeam[i].github}</a></p>`
        } else if (myTeam[i].school) {
            newCard += `
            <p>School: ${myTeam[i].school}</p>`
        }
        newCard += `</div>

    </div>`
        htmlArray.push(newCard)
    }

    const secondHtml = `
    </div>
    </body>
    
    </html`
    htmlArray.push(secondHtml);



    fs.writeFile('index.html', htmlArray.join(""), (err) => {
        if (err) throw err;
    })
}
