const Engineer = require('../lib/engineer')
const Employee = require('../lib/employee')

// tests for the Engineer class
describe('Engineer', () => {
    it('should return the github userName with the getGitHub function', () => {
        let userName = 'username';
        let engineerGitHub = new Engineer('Michael', 1, 'test@test.com', userName);
        expect(engineerGitHub.getGitHub(userName)).toBe('username');
    });
    it('should return the github userName with the getGitHub function', () => {
        let role = 'Engineer';
        let engineerRole = new Engineer('Michael', 1, 'test@test.com', 'username');
        expect(engineerRole.getRole()).toBe(role);
    });
});