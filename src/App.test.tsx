import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Greeting} from "./Greet";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders greeting component properly', () => {
  render(<Greeting/>);
  const greetings = screen.getByText('Greetings');
  expect(greetings).toBeInTheDocument();
});
