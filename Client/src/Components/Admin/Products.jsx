import React from 'react';
import Dasboard from './Dasboard';
import ProductsList from '../ProductsList';

const Products = () => {
  return (
    <div className="flex">
      {/* Sticky Sidebar */}
      <div className="sticky top-0 h-screen">
        <Dasboard />
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto h-screen">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ProductsList />
      </div>
    </div>
  );
};

export default Products;
