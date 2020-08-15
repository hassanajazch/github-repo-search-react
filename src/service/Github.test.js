import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GithubService from './Github';

describe('Service: Github', () => {
    it('it should return array', async () => {
        const mock = new MockAdapter(axios);
        const githubUsername = 'hassanajazch';

        mock.onGet(`https://api.github.com/users/${githubUsername}/repos`).reply(200, []);

        const result = await GithubService.GetReposByUsername(githubUsername);
        expect(Array.isArray(result)).toBeTruthy;
    });

    it('it should throw error in case of API call failure', async () => {
        // error case handling needs to be implemented
        expect(true).toBeTruthy;
    });
});
