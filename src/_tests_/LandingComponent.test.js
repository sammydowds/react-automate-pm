import React from 'react';
import { render } from '@testing-library/react';
import Landing from '../components/LandingComponent';
import { BrowserRouter } from 'react-router-dom'; 

test('renders main jumbotron title', () => {
  const { getByText } = render(<BrowserRouter><Landing /></BrowserRouter>);
  const titleJumbotron = getByText('Launch your projects.');
  expect(titleJumbotron).toBeInTheDocument();
});