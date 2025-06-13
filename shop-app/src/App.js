import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopHeader from './components/layout/ShopHeader';
import ShopFooter from './components/layout/ShopFooter';
import ShopHomePage from './pages/ShopHomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import CheckoutPage from './pages/CheckoutPage'; // Nouvelle page
import { CartProvider } from './context/CartContext'; // Import CartProvider
import './App.css';

function App() {
  return (
    <CartProvider> { /* Envelopper les routes avec CartProvider */ }
      <Router>
        <div className="App">
          <ShopHeader />
          <main>
            <Routes>
              <Route path="/" element={<ShopHomePage />} />
              <Route path="/produits" element={<ProductsPage />} />
              <Route path="/panier" element={<CartPage />} />
              <Route path="/compte" element={<AccountPage />} />
              <Route path="/checkout" element={<CheckoutPage />} /> { /* Nouvelle route */ }
            </Routes>
          </main>
          <ShopFooter />
        </div>
      </Router>
    </CartProvider>
  );

}

export default App;
