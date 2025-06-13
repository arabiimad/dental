import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartPage.css'; // CSS pour la page du panier

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart } = useCart(); // addToCart pour la quantité peut être utile

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Votre Panier est Vide</h2>
        <Link to="/produits" className="button">Voir les produits</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Votre Panier</h2>
      <ul className="cart-items-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.imageUrl || 'https://via.placeholder.com/80?text=Produit'} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Prix: {item.price} € x {item.quantity}</p>
              {/* TODO: Ajouter des boutons pour modifier la quantité */}
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-button">Retirer</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total: {getTotalPrice()} €</h3>
        <Link to="/checkout" className="button checkout-button">Passer la Commande</Link>
      </div>
    </div>
  );
};

export default CartPage;
