import axios from 'axios';

export default class Github {
    /**
     * add account details in database
     * @param {string} username
     * @returns {Promise<Array>} repos
     */
    static async GetReposByUsername(username) {
        try {
            const APIURL = `https://api.github.com/users/${username}/repos`
            const repos = await axios.get(APIURL);

            return repos.data ? repos.data : [];
        } catch (err) {
            return [];
        }
    }
}