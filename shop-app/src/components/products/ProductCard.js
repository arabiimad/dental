import React from 'react';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => (
  <motion.div
    className="product-card"
    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.15)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <img src={product.imageUrl || 'https://via.placeholder.com/150?text=Produit'} alt={product.name} />
    <h3>{product.name}</h3>
    <p className="description">{product.description}</p>
    <p className="price">{product.price} €</p>
    <motion.button
      onClick={() => onAddToCart(product)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Ajouter au Panier
    </motion.button>
  </motion.div>
);

export default ProductCard;
