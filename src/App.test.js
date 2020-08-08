import React from 'react';
import { render } from '@testing-library/react';
import MainJsApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<MainJsApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
