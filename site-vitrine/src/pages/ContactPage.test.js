import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage component', () => {
  test('renders contact form elements', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/Full Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  test('renders contact information section', () => {
    render(<ContactPage />);
    expect(screen.getByText(/Our Contact Information/i)).toBeInTheDocument();
    expect(screen.getByText(/123 Dental Avenue/i)).toBeInTheDocument(); // Vérifie une partie de l'adresse
  });
});
