const Engineer = require('../lib/engineer')


// tests for the Enineer class
describe('Engineer', () => {
    it('should return the github userName with the getGitHub function', () => {
        let github = 'username';
        let engineerGitHub = new Engineer('Michael', 1, 'test@test.com', github);
        expect(getGitHub(github)).toBe('username');
    });
});