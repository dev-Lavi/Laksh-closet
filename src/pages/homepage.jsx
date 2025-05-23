import React, { useRef, useEffect } from 'react';
import CategorySection from '../components/CategorySection';
import arrowIcon from '../assets/arrow.svg';
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import banner4 from '../assets/banner4.svg';
import banner5 from '../assets/banner5.svg';

// BAGGY Products (pants1 to pants4)
const baggyProducts = [
  {
    name: '4 Pocket Denim',
    price: 860,
    sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['28', '30', '32'],
    image: '/images/pants1.svg',
    description: 'Select Size'
  },
  {
    name: 'Grey Baggy',
    price: 950,
        sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['30', '32'],
    image: '/images/pants2.svg',
    description: 'Select Size'
  },
  {
    name: 'Rust Baggy',
    price: 990,
        sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['30', '32'],
    image: '/images/pants3.svg',
    description: 'Select Size'
  },
  {
    name: 'Olive Cargo Jeans',
    price: 1050,
        sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['30', '32'],
    image: '/images/pants4.svg',
    description: 'Select Size'
  }
];

// STRAIGHT FIT Products (pants6 to pants9)
const straightFitProducts = [
  {
    name: 'Cream Baggy Pants',
    price: 970,
        sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['30', '32'],
    image: '/images/pants6.svg',
    description: 'Select Size'
  },
  {
    name: 'Light Grey Jogger Denim',
    price: 890,
        sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['28', '30'],
    image: '/images/pants7.svg',
    description: 'Select Size'
  },
  {
    name: 'Urban Fit Baggy',
    price: 1050,
        sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['30', '32'],
    image: '/images/pants8.svg',
    description: 'Select Size'
  },
  {
    name: 'Stone Wash Baggy',
    price: 980,
        sizes: ['28', '30', '32', '34', '36'],
    availableSizes: ['34'],
    image: '/images/pants9.svg',
    description: 'Select Size'
  }
];

// NEW ARRIVALS Products (pants10 to pants13)
const newArrivals = [
  {
    name: 'Shadow Black Jeans',
    price: 1020,
    sizes: ['28', '30', '32'],
    availableSizes: ['28', '30', '32'],
    image: '/images/pants10.svg',
    description: 'Select Size'
  },
  {
    name: 'Midnight Blue Tapered',
    price: 1100,
    sizes: ['30', '32'],
    availableSizes: ['30', '32'],
    image: '/images/pants11.svg',
    description: 'Select Size'
  },
  {
    name: 'Dust Grey Loose Fit',
    price: 970,
    sizes: ['28', '30'],
    availableSizes: ['28', '30'],
    image: '/images/pants12.svg',
    description: 'Select Size'
  },
  {
    name: 'Ink Black Baggy',
    price: 1080,
    sizes: ['30', '32', '34'],
    availableSizes: ['30', '32', '34'],
    image: '/images/pants13.svg',
    description: 'Select Size'
  }
];


function HomePage() {
  const bannerRef = useRef(null);
  const bannerCount = 5;
  const bannerWidth = 380;
  const gap = 10;
  const scrollAmount = bannerWidth + gap;
  const scrollStep = scrollAmount;

  useEffect(() => {
    const interval = setInterval(() => {
      if (bannerRef.current) {
        const maxScroll = scrollAmount * (bannerCount - 3.5);
        const current = bannerRef.current.scrollLeft;

        if (current >= maxScroll) {
          bannerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          bannerRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollManual = (direction) => {
    const container = bannerRef.current;
    container.scrollBy({
      left: direction === 'next' ? scrollStep : -scrollStep,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Banner Slider */}
      <div className="w-full flex items-center justify-center my-10 relative">
        <button
          className="absolute left-0 z-10 bg-white shadow p-1 rounded-full ml-1"
          onClick={() => scrollManual('prev')}
        >
          <img src={arrowIcon} alt="Prev" className="rotate-180 w-6" />
        </button>

        <div className="overflow-hidden w-[1260px]" ref={bannerRef}>
          <div className="flex gap-[10px] transition-all duration-500 ease-in-out">
            {[banner1, banner2, banner3, banner4, banner5].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Banner ${index + 1}`}
                className="w-[380px] h-[500px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <button
          className="absolute right-0 z-10 bg-white shadow p-1 rounded-full mr-1"
          onClick={() => scrollManual('next')}
        >
          <img src={arrowIcon} alt="Next" className="w-6" />
        </button>
      </div>

      {/* Category Sections */}
<CategorySection title="BAGGY" products={baggyProducts} link="/category/baggy" />
<CategorySection title="STRAIGHT FIT" products={straightFitProducts} link="/category/straight-fit" />
<CategorySection title="NEW ARRIVALS" products={newArrivals} link="/category/new-arrivals" />
    </div>
  );
}

export default HomePage;
