import React from 'react';
import { render } from '@testing-library/react';
import RepoTable from './RepoTable';

describe('Presentational Component: RepoTable', () => {
    it('check repos data exists in table or not', () => {
        const sampleRepoData =  [{
            id: 1231,
            name: 'reactCalendar',
            stargazers_count: 12,
            forks_count: 13,
            html_url: 'https://github.com/hassanajazch/Bank-APIs-Node.js',
        }];
        const { getByText } = render(<RepoTable reposDetails={sampleRepoData} />);
        const repoText = getByText(/reactCalendar/i);

        expect(repoText).toBeInTheDocument();
    });
});