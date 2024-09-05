import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductsList from './ProductsList';

const ProductsPage = () => {
  const { category } = useParams();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page-container">
      <Header className={isHeaderFixed ? 'fixed' : ''} />
      <main className="main-content">
      <h1 className="category-title">{category.replace('-', ' ').toUpperCase()}</h1>
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;