
const Manager = require('../lib/manager')
const Employee = require('../lib/employee');



describe('Manager', () => {
    it('should return the office Number with the getOfficeNumber function', () => {
        let officeNumber = 2;
        let newManagerNumber = new Manager('Michael', 1, 'test@test.com', officeNumber)
        expect(newManagerNumber.getOfficeNumber(officeNumber)).toBe(officeNumber)
    })

    it('should return the role by the getRole function', () => {
        let role = 'Manager';
        let managerRole = new Manager('Michael', 1, 'test@test.com', 2);
        expect(managerRole.getRole()).toBe(role);
    })
})