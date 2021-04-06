const Employee = require('../lib/employee')
const Manager = require('../lib/manager')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')





describe('Employee', () => {
    it('Create a new Employee', () => {
        const newEmployee = new Employee();
        expect(typeof (newEmployee)).toBe('object')
    });
    it('should return the name of the new employee', () => {
        let name = 'Michael';
        let newEmployeeName = new Employee(name);
        expect(newEmployeeName.name).toBe(name)
    });
});