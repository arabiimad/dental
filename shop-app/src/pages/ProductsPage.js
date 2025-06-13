import React from 'react';
import ProductCard from '../components/products/ProductCard';
import { useCart } from '../context/CartContext';
import './ProductsPage.css'; // CSS pour la page des produits

const mockProducts = [
  { id: 1, name: 'Produit Dentaire Alpha', description: 'Description courte du produit Alpha.', price: 99.99, imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Produit1' },
  { id: 2, name: 'Consommable Beta Plus', description: 'Le meilleur consommable Beta.', price: 19.50, imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?Text=Produit2' },
  { id: 3, name: 'Équipement Gamma Pro', description: 'Équipement professionnel Gamma.', price: 1250.00, imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?Text=Produit3' },
  { id: 4, name: 'Solution DeltaClean', description: 'Solution de nettoyage efficace.', price: 45.75, imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?Text=Produit4' },
];

const ProductsPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Nos Produits Dentaires</h2>
      <div className="products-grid">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
