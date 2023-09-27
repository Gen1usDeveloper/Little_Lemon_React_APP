import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
test('renders header, nav, main, and footer', () => {
  const { getByText } = render(<App />);

  // Assert that the header is rendered
  expect(screen.getByText('Header')).toBeInTheDocument();

  // Assert that the nav is rendered
  expect(screen.getByText('Nav')).toBeInTheDocument();

  // Assert that the main content is rendered
  expect(screen.getByText('This is my Capstone Project For my coursera certification.')).toBeInTheDocument();

  // Assert that the footer is rendered
  expect(screen.getByText('© 2023 | Muhammad Jawad khan')).toBeInTheDocument();
});
