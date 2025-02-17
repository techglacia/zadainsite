import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './../globals.css';

const hoodies = [
    { id: 1, name: 'Black Hoodie', category: 'Hoodies', price: 1500, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['black', 'gray'], sizes: ['S', 'M', 'L', 'XL'] },
    { id: 2, name: 'White Hoodie', category: 'Hoodies', price: 1600, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['white', 'beige'], sizes: ['M', 'L', 'XL'] },
    { id: 3, name: 'Red Hoodie', category: 'Hoodies', price: 1400, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['red', 'black'], sizes: ['S', 'M', 'L'] },
    { id: 4, name: 'Blue Hoodie', category: 'Hoodies', price: 1550, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['blue', 'navy'], sizes: ['M', 'L', 'XL'] },
    { id: 5, name: 'Green Hoodie', category: 'Hoodies', price: 1650, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['green', 'darkgreen'], sizes: ['S', 'M', 'L', 'XL'] },
    { id: 6, name: 'Gray Hoodie', category: 'Hoodies', price: 1700, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['gray', 'black'], sizes: ['M', 'L', 'XL'] },
    { id: 7, name: 'Purple Hoodie', category: 'Hoodies', price: 1450, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['purple', 'violet'], sizes: ['S', 'M', 'L'] },
    { id: 8, name: 'Yellow Hoodie', category: 'Hoodies', price: 1580, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['yellow', 'gold'], sizes: ['M', 'L', 'XL'] },
    { id: 9, name: 'Orange Hoodie', category: 'Hoodies', price: 1490, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['orange', 'red'], sizes: ['S', 'M', 'L', 'XL'] },
    { id: 10, name: 'Pink Hoodie', category: 'Hoodies', price: 1620, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['pink', 'lightpink'], sizes: ['M', 'L', 'XL'] }
  ];
  

function Page() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-semibold mb-8">Hoodies</h2>
        <div className="flex flex-wrap -m-4">
          {hoodies.map((hoodie) => (
            <div key={hoodie.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/hoodies/${hoodie.id}`} legacyBehavior>
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
