import React from 'react';
import { render } from '@testing-library/react';
import Landing from '../components/LandingComponent';

test('renders main jumbotron title', () => {
  const { getByText } = render(<Landing />);
  const titleJumbotron = getByText('Launch your projects.');
  expect(titleJumbotron).toBeInTheDocument();
});