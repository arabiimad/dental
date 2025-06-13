import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation'; // Assurez-vous que le chemin est correct

const Header = () => (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h1
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      Site Vitrine
    </motion.h1>
    <Navigation />
  </motion.header>
);

export default Header;
