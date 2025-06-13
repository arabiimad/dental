import React from 'react';
import { Link } from 'react-router-dom';

const ShopNavigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Accueil Boutique</Link></li>
      <li><Link to="/produits">Produits</Link></li>
      <li><Link to="/panier">Panier</Link></li>
      <li><Link to="/compte">Mon Compte</Link></li>
    </ul>
  </nav>
);

export default ShopNavigation;
