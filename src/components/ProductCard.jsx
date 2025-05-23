import React from 'react';
import addtocartheart from '../assets/heart.svg'; // Adjust path as needed
function ProductCard({ product }) {
  const availableSizes = product.availableSizes || [];

  return (
    <div className="relative border rounded-lg p-3 shadow-sm hover:shadow-md transition bg-white">
      {/* Heart Icon with hover red animation */}
      <button className="absolute top-3 right-3 transition">
        <img
          src={addtocartheart}
          alt="Add to Favourites"
          className="w-6 h-6 hover:filter hover:brightness-0 hover:invert hover:sepia hover:hue-rotate-[330deg] transition duration-300"
        />
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[400px] object-cover rounded mb-3"
      />

      {/* Product Info */}
      <h3 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h3>

      {/* Sizes with opacity change based on availability */}
      <div className="flex gap-2 justify-center mt-3 flex-wrap">
        {product.sizes.map((size, i) => {
          const isAvailable = availableSizes.includes(size);
          return (
            <span
              key={i}
              className={`border px-2 py-1 text-xs rounded ${
                isAvailable ? 'opacity-100' : 'opacity-30'
              }`}
            >
              {size}
            </span>
          );
        })}
      </div>

      {/* Price and Select Size */}
      <div className="flex justify-between items-center text-sm border-t pt-3 mt-3">
        <div>
          <span className="font-semibold text-gray-800">₹{product.price}.00</span>
          <span className="line-through text-gray-400 ml-1 text-xs">₹1500.00 MRP</span>
        </div>
        <span className="text-gray-600 text-xs">Select Size</span>
      </div>
    </div>
  );
}

export default ProductCard;
