import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter est nécessaire car Header contient Navigation qui utilise Link
import Header from './Header';

describe('Header component', () => {
  test('renders site title', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    // Utiliser une expression régulière pour plus de flexibilité (insensible à la casse, etc.)
    const titleElement = screen.getByText(/site vitrine/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/Accueil/i)).toBeInTheDocument();
    expect(screen.getByText(/À Propos/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});
