import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Pour les <Link>
import { CartProvider, useCart } from '../context/CartContext';
import CartPage from './CartPage';

// Mocker le module useCart
jest.mock('../context/CartContext', () => ({
  ...jest.requireActual('../context/CartContext'), // Importe les exports réels
  useCart: jest.fn(), // Remplace useCart par un mock
}));

const mockProductInCart = {
  id: 1, name: 'Produit Test dans Panier', price: 25.00, quantity: 2, imageUrl: 'https://via.placeholder.com/80'
};

describe('CartPage component', () => {
  test('displays empty cart message when no items are present', () => {
    useCart.mockReturnValue({ // Configure la valeur retournée par le mock useCart
      cartItems: [],
      removeFromCart: jest.fn(),
      getTotalPrice: () => '0.00',
    });
    render(<MemoryRouter><CartPage /></MemoryRouter>);
    expect(screen.getByText(/Votre Panier est Vide/i)).toBeInTheDocument();
    expect(screen.getByText(/Voir les produits/i)).toBeInTheDocument(); // Bouton pour voir les produits
  });

  test('displays cart items and total when items are present', () => {
    useCart.mockReturnValue({
      cartItems: [mockProductInCart],
      removeFromCart: jest.fn(),
      getTotalPrice: () => (mockProductInCart.price * mockProductInCart.quantity).toFixed(2),
    });
    render(<MemoryRouter><CartPage /></MemoryRouter>);
    expect(screen.getByText(mockProductInCart.name)).toBeInTheDocument();
    expect(screen.getByText(`Prix: ${mockProductInCart.price} € x ${mockProductInCart.quantity}`)).toBeInTheDocument();
    expect(screen.getByText(/Total: 50.00 €/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Passer la Commande/i })).toBeInTheDocument();
  });

  test('calls removeFromCart when remove button is clicked', () => {
    const mockRemoveFromCart = jest.fn();
    useCart.mockReturnValue({
      cartItems: [mockProductInCart],
      removeFromCart: mockRemoveFromCart,
      getTotalPrice: () => '50.00',
    });
    render(<MemoryRouter><CartPage /></MemoryRouter>);
    const removeButton = screen.getByRole('button', { name: /Retirer/i });
    fireEvent.click(removeButton);
    expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockProductInCart.id);
  });
});
