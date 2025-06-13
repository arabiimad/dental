import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  name: 'Test Product',
  description: 'This is a test product.',
  price: 10.99,
  imageUrl: 'https://via.placeholder.com/150'
};

describe('ProductCard component', () => {
  test('renders product information correctly', () => {
    const mockAddToCart = jest.fn();
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} €`)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mockProduct.name })).toHaveAttribute('src', mockProduct.imageUrl);
    expect(screen.getByRole('button', { name: /Ajouter au Panier/i })).toBeInTheDocument();
  });

  test('calls onAddToCart when button is clicked', () => {
    const mockAddToCart = jest.fn(); // Crée une fonction mock
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    const addButton = screen.getByRole('button', { name: /Ajouter au Panier/i });
    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
