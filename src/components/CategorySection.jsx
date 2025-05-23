import React from 'react';
import ProductCard from './ProductCard';

function CategorySection({ title, products }) {
  return (
    <section className="w-full max-w-7xl px-4 py-12 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-800">
          {title}
        </h2>
        <button className="text-gray-600 hover:text-black underline text-sm">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
