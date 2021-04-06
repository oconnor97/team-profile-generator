const Employee = require('../lib/employee')



describe('Employee', () => {
    // Tests for recieving the values from the Emplyoee paramaters
    it('Create a new Employee', () => {
        const newEmployee = new Employee();
        expect(typeof (newEmployee)).toBe('object')
    });
    it('should return the name of the new employee', () => {
        let name = 'Michael';
        let newEmployeeName = new Employee(name);
        expect(newEmployeeName.name).toBe(name)
    });
    it('should return the id of the new employee', () => {
        let idNumber = 1
        let newEmployeeId = new Employee('Michael', idNumber);
        expect(newEmployeeId.id).toBe(idNumber)
    });
    it('should return the email of the new employee', () => {
        let email = 'test@test.com'
        let newEmployeeEmail = new Employee('Michael', 1, email);
        expect(newEmployeeEmail.email).toBe(email)
    });
    it('should return the role of the new employee', () => {
        let role = 'Employee'
        let newEmployeeRole = new Employee('Michael', 1, 'test@test.com');
        expect(newEmployeeRole.role).toBe(role)
    });

    // Testing the Employee functions

    it('should return the name from the getName function', () => {
        let name = 'Michael';
        let newEmployeeName = new Employee(name);
        expect(newEmployeeName.getName()).toBe(name)
    });
    it('should return the id from the getId function', () => {
        let idNumber = 1
        let newEmployeeId = new Employee('Michael', idNumber);
        expect(newEmployeeId.getId()).toBe(idNumber)
    });
    it('should return the email of the new employee', () => {
        let email = 'test@test.com'
        let newEmployeeEmail = new Employee('Michael', 1, email);
        expect(newEmployeeEmail.getEmail()).toBe(email)
    });
    it('should return the role with the getRole function', () => {
        let role = 'Employee'
        let newEmployeeRole = new Employee('Michael', 1, 'test@test.com');
        expect(newEmployeeRole.getRole()).toBe(role)
    });
});


