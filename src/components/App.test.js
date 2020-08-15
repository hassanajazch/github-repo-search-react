import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Presentational Component: App', () => {
    it('check title text exists or not', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/Search User Github Repos/i);
        expect(linkElement).toBeInTheDocument();
    });
});
