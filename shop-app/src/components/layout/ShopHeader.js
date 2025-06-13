import React from 'react';
import { motion } from 'framer-motion';
import ShopNavigation from './ShopNavigation';

const ShopHeader = () => (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <motion.h1
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4, type: 'spring', stiffness: 120 }}
    >
      Ma Boutique en Ligne
    </motion.h1>
    <ShopNavigation />
  </motion.header>
);

export default ShopHeader;
