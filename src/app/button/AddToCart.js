// 'use client'; makes this file a client-side component
'use client'; 

import { useState } from 'react';
// import { fetchProducts } from '../api/fetchProducts';
export default function AddToCart({ products }) {
  const [cart, setCart] = useState(() => {
   const savedCart = localStorage.getItem('cart');
   return savedCart ? JSON.parse(savedCart) : [];
 });
const [selectedSize, setSelectedSize] = useState({});

// const products = [
//   { id: 1, name: "T-Shirt", price: 500, image: "https://thehangerpakistan.com/cdn/shop/files/52C8CA93-09A4-4A0B-9FAC-4153A16F13F5.jpg?v=1732476980&width=500" },
//   { id: 2, name: "Jeans", price: 1000, image: "/jeans.jpg" },
// ];
  const handleAddToCart = (product) => {
    console.log("yes hadnle add to cart is runnninggngngg")
        const size = selectedSize[product.id] || "M"; // Default size if not selected
      
        setCart((prevCart) => {
          const itemExists = prevCart.some(
            (item) => item.id === product.id && item.size === size
          );
      
          if (itemExists) {
            return prevCart.map((item) =>
              item.id === product.id && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            const newItem = { ...product, size, quantity: 1 };
            return [...prevCart, newItem];
          }
        });
      };

  return (
    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"  onClick={() => handleAddToCart(product)}>
      Add To Cart</button>
 
  
  );
}
