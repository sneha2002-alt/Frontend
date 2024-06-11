import React from 'react';
import Navbar from '../Components/Navbar';

import './HomePage.css';
import Category from '../Components/Category';
import ProductSection from '../Components/ProductSection';

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <Category />
      <ProductSection />
    </div>
  );
};

export default HomePage;
