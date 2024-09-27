import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders hello world', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { name: /hello world/i });
    expect(heading).toBeInTheDocument();
  });
});
