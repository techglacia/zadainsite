"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { addItem } from "../../redux/slices/cartSlice";
import { notFound } from "next/navigation";

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

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const hoodie = hoodies.find((h) => h.id === Number(id));
  
  if (!hoodie) {
    return notFound();
  }

const [selectedColor, setSelectedColor] = useState(hoodie?.colors?.[0] || "");
const [selectedSize, setSelectedSize] = useState(hoodie?.sizes?.[0] || "");


  

const handleAddToCart = () => {
  if (!selectedColor) {
    alert("Please select a color and size before adding to cart.");
    return;
  }

  dispatch(
    addItem({
      id: hoodie.id,
      name: hoodie.name,
      price: hoodie.price,
      image: hoodie.image,
      category: hoodie.category,
      selectedColor,
      selectedSize,
    })
  );
};


  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={hoodie.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={hoodie.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {hoodie.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {hoodie.name}
            </h1>
            <p className="leading-relaxed">High-quality hoodie with premium comfort and warmth.</p>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* Color Selection as Dropdown */}
              <div className="flex flex-col mr-6">
                <label className="mr-3 font-medium">Color</label>
                <select 
  value={selectedColor}
  onChange={(e) => setSelectedColor(e.target.value)}
>
  {hoodie?.colors?.map((color, index) => (
    <option key={index} value={color}>{color}</option>
  )) || <option value="">No colors available</option>}
</select>
              </div>
              
              {/* Size Selection as Dropdown */}
              <div className="flex flex-col">
                <label className="mr-3 font-medium">Size</label>
                <select 
  value={selectedSize}
  onChange={(e) => setSelectedSize(e.target.value)}
>
  {hoodie?.sizes?.map((size, index) => (
    <option key={index} value={size}>{size}</option>
  )) || <option value="">No sizes available</option>}
</select>
              </div>
            </div>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                Rs {hoodie.price}
              </span>
              <button
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;