"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { addItem } from "../../redux/slices/cartSlice";
import { notFound } from "next/navigation";

const hoodies = [
  { id: 1, name: 'Black Hoodie', category: 'Hoodies', price: 1500, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['black', 'gray'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 2, name: 'White Hoodie', category: 'Hoodies', price: 1600, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['white', 'beige'], sizes: ['M', 'L', 'XL'] },
  { id: 3, name: 'Red Hoodie', category: 'Hoodies', price: 1400, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['red', 'black'], sizes: ['S', 'M', 'L'] },
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
  if (!selectedColor || !selectedSize) {
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