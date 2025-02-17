"use client";

import React, { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Checkout = () => {
  // Receiving from navbar 
  const [cartItems, setCartItems] = useState([]);

  // Retrieve data from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("heading")) || [];
    setCartItems(storedItems);
  }, []);

  const form = useRef();

  const router = useRouter(); 
  const sendEmail = (e) => {
    e.preventDefault();
  
    const subtotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const total = subtotal; // Assuming free shipping
  
    const productDetails = cartItems.map((item, index) =>
      `- ${item.name} (${item.category}) | Color: ${item.selectedColor}, Size: ${item.selectedSize} | Qty: ${item.quantity} | Price: PKR ${item.price}`
    ).join("\n");
  
    const templateParams = {
      your_name: form.current.your_name.value,
      your_email: form.current.your_email.value,
      phone: form.current.phone.value,
      province: form.current.province.value,
      city: form.current.city.value,
      payment_method: "Cash on Delivery", // Change if needed
      subtotal: subtotal,
      total: total,
      product_details: productDetails
    };
  
    emailjs.send('service_xc5peaj', 'template_lqqghrm', templateParams, 'c9XCReyO7A14Gdlb4')
      .then((result) => {
        console.log(result.text);
        alert('Order placed successfully!');
        router.push("/confirm");
      }, (error) => {
        console.log(error.text);
        alert('Failed to place order. Please try again.');
      });
  };


  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form ref={form} onSubmit={sendEmail} className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>
        <input type="text" name="your_name" placeholder="Enter your name" required className="block w-full border p-2 mb-4" />
        <input type="email" name="your_email" placeholder="Enter your email" required className="block w-full border p-2 mb-4" />
        <select name="province" required className="block w-full border p-2 mb-4">
          <option value="">Select Province</option>
          <option value="Gilgit Baltistan">Gilgit Baltistan</option>
          <option value="Azad Kashmir">Azad Kashmir</option>
          <option value="Punjab">Punjab</option>
          <option value="KPK">KPK</option>
          <option value="Balochistan">Balochistan</option>
          <option value="Sindh">Sindh</option>
        </select>
        <input type="text" name="city" placeholder="Enter your city" required className="block w-full border p-2 mb-4" />
        <input type="text" name="phone" placeholder="300-1234567" required className="block w-full border p-2 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Order Summary</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="p-4 border-b">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Price: PKR {item.price}</p>
            <p className="text-gray-600">Color: {item.selectedColor}</p>
            <p className="text-gray-600">Size: {item.selectedSize}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mt-2" />
          </div>
        ))}
        <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white mt-2">
          <span>Subtotal:</span>
          <span>PKR {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</span>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white mt-2">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg" >Place Order</button>
      </form>
    </section>
  );
};

export default Checkout;
