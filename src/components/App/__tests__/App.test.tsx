import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('should increment counter', () => {
  render(<App />);

  userEvent.click(screen.getByTestId('app-button'));

  expect(screen.getByRole('button')).toHaveTextContent('Counter - 1');
});
