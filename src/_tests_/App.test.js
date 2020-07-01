import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders Projectile header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Projectile');
  expect(linkElement).toBeInTheDocument();
});

