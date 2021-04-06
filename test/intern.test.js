const Intern = require('../lib/intern');
const Employee = require('../lib/employee');
const { it, test, expect } = require('@jest/globals');


describe('Intern', () => {
    it('should return the intern school with the getSchool funtion', () => {
        let schoolName = 'OSU';
        let newInternSchool = new Intern('Michael', 1, 'test@test.com', schoolName)
        expect(newInternSchool.getSchool()).toBe(schoolName)
    })

    it('should return the role by the getRole function', () => {
        let role = 'Intern';
        let internRole = new Intern('Michael', 1, 'test@test.com', 'OSU');
        expect(internRole.getRole()).toBe(role);
    })
})

