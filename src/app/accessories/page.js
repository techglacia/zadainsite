import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './../globals.css';

const hoodies = [
  { 
    id: 1, 
    name: 'Karandi Suit', 
    category: 'Solids', 
    price: 6999, 
    image: '/images/products/1.jpeg', 
    colors: ['Aqua Blue', 'Magenta', 'Yellow'],
    sizes: [] 
  },
  { 
    id: 2, 
    name: 'Embroidered Karandi Khadder Suit', 
    category: 'Embroidered', 
    price: 5499, 
    image: '/images/products/2.jpeg', 
    colors: ['Blue', 'Olive Green', 'Pink', 'Lilac', 'Beige'],
    sizes: [] 
  },
  { 
    id: 3, 
    name: 'Karandi Suit', 
    category: 'Solids', 
    price: 7499, 
    image: '/images/products/3.jpeg', 
    colors: ['Red', 'Navy Blue', 'Black'],
    sizes: [] 
  },
  { 
    id: 4, 
    name: 'Embroidered Karandi Khadder Suit', 
    category: 'Embroidered', 
    price: 5899, 
    image: '/images/products/4.jpeg', 
    colors: ['White', 'Green', 'Coral'],
    sizes: [] 
  },
  { 
    id: 5, 
    name: 'Linen Suit', 
    category: 'Linen', 
    price: 4999, 
    image: '/images/products/5.jpeg', 
    colors: ['Light Grey', 'Charcoal', 'Cream'],
    sizes: [] 
  },
  { 
    id: 6, 
    name: 'Cotton Jacquard Suit', 
    category: 'Cotton', 
    price: 3999, 
    image: '/images/products/6.jpeg', 
    colors: ['Purple', 'Peach', 'Off-White'],
    sizes: [] 
  },
  { 
    id: 7, 
    name: 'Silk Dupatta Suit', 
    category: 'Silk', 
    price: 8199, 
    image: '/images/products/7.jpeg', 
    colors: ['Sky Blue', 'Lavender', 'Mint'],
    sizes: [] 
  },
  { 
    id: 8, 
    name: 'Chikan Kari Suit', 
    category: 'Cotton', 
    price: 6499, 
    image: '/images/products/8.jpeg', 
    colors: ['White', 'Pink', 'Turquoise'],
    sizes: [] 
  },
  { 
    id: 9, 
    name: 'Cotton Lawn Suit', 
    category: 'Lawn', 
    price: 2999, 
    image: '/images/products/9.jpeg', 
    colors: ['Light Blue', 'Yellow', 'Black'],
    sizes: [] 
  },
  { 
    id: 10, 
    name: 'Embroidered Velvet Suit', 
    category: 'Velvet', 
    price: 9499, 
    image: '/images/products/10.jpeg', 
    colors: ['Burgundy', 'Navy Blue', 'Gold'],
    sizes: [] 
  },
  { 
    id: 11, 
    name: 'Georgette Suit', 
    category: 'Georgette', 
    price: 7199, 
    image: '/images/products/11.jpeg', 
    colors: ['Cream', 'Rose', 'Olive'],
    sizes: [] 
  },
  { 
    id: 12, 
    name: 'Chiffon Suit', 
    category: 'Chiffon', 
    price: 6199, 
    image: '/images/products/12.jpeg', 
    colors: ['Mint', 'Peach', 'Lemon'],
    sizes: [] 
  },
  { 
    id: 13, 
    name: 'Cotton Lawn with Dupatta', 
    category: 'Lawn', 
    price: 3499, 
    image: '/images/products/13.jpeg', 
    colors: ['Blue', 'White', 'Pink'],
    sizes: [] 
  },
  { 
    id: 14, 
    name: 'Knitwear Suit', 
    category: 'Knitwear', 
    price: 4599, 
    image: '/images/products/14.jpeg', 
    colors: ['Black', 'Grey', 'White'],
    sizes: [] 
  }
];
  

function Page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Accessories</h2>
        <div className="flex flex-wrap -m-4">
          {hoodies.map((hoodie) => (
            <div key={hoodie.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/accessories/${hoodie.id}`} legacyBehavior>
                <a className="block relative h-78 rounded overflow-hidden">
                  <img alt={hoodie.name} className="object-cover object-center h-[55vh] w-[45vh] block" src={hoodie.image} />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{hoodie.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{hoodie.name}</h2>
                <p className="mt-1">PKR {hoodie.price}.00</p>
                
                {/* Color Selection */}
                <div className="flex mt-2">
                  <span className="mr-3">Color:</span>
                  {hoodie.colors.map((color, index) => (
                    <button 
                      key={index} 
                      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ml-1`} 
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                </div>

                {/* Size Selection */}
                <div className="flex mt-2 items-center">
                  <span className="mr-3">Size:</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {hoodie.sizes.map((size, index) => (
                        <option key={index}>{size}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
