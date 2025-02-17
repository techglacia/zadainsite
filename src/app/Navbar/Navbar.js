"use client"; // Enables client-side rendering in Next.js
// Import useEffect from React
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import "./../globals.css";
import Link from 'next/link';
// import { useRef } from 'react';
import { MdOutlineAccountCircle} from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { GiWolfHead } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { addItem } from "../redux/slices/cartSlice";
import { removeItem} from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

// import { useSelector, useDispatch } from "react-redux";
const hoodies = [
  { id: 1, name: 'Black Hoodie', category: 'Hoodies', price: 1500, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['black', 'gray'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 2, name: 'White Hoodie', category: 'Hoodies', price: 1600, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['white', 'beige'], sizes: ['M', 'L', 'XL'] },
  { id: 3, name: 'Red Hoodie', category: 'Hoodies', price: 1400, image: 'https://thehangerpakistan.com/cdn/shop/files/9CF57D5E-B1EB-403B-885A-D300366AAA9B.jpg?v=1733237509&width=500', colors: ['red', 'black'], sizes: ['S', 'M', 'L'] },
];

const Navbar = ({ item}) => {




  
const dispatch = useDispatch();
  const { id } = useParams();
  const hoodie = hoodies.find((h) => h.id === Number(id));
 
  if (!hoodie) {
   console.log("error from navbar if hoodie");
  }

const [selectedColor, setSelectedColor] = useState(hoodie?.colors?.[0] || "");
const [selectedSize, setSelectedSize] = useState(hoodie?.sizes?.[0] || "");
  

  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu=()=>{
    setIsVisible(!isVisible); 
  }

  const [cartMenu,setCartMenu]=useState(false);
const toggleCart=()=>{
  setCartMenu(!cartMenu)
}

const cartItems = useSelector((state) => state.cart.items)
const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)




const handleAddToCart = () => {
  const storedItems = JSON.parse(localStorage.getItem("heading")) || [];

  // Check if the item already exists
  const existingItem = storedItems.find(item => 
    item.id === hoodie.id && 
    item.selectedColor === selectedColor && 
    item.selectedSize === selectedSize
  );

  if (existingItem) {
    // Increase quantity if item already exists
    existingItem.quantity += 1;
  } else {
    // Add new item if it doesn't exist
    storedItems.push({
      id: hoodie.id,
      name: hoodie.name,
      price: hoodie.price,
      image: hoodie.image,
      category: hoodie.category,
      selectedColor,
      selectedSize,
      quantity: 1, // Initialize quantity as 1
    });
  }

  // Save updated array to localStorage
  localStorage.setItem("heading", JSON.stringify(storedItems));
  router.push("/checkout");
};

const handleRemoveToCart = () => {
  if (!selectedColor || !selectedSize) {
    alert("Please select a color and size before adding to cart.");
    return;
  }

  dispatch(
    removeItem({
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


// passing tot the checkout
const router = useRouter();
  
// Initialize with item.name or fallback to an empty string
const [heading, setHeading] = useState({
  id: hoodie?.id || "",
  name: hoodie?.name || "",
  // name: hoodie?.size || "",
  price: hoodie?.price || "",
  image: hoodie?.image || "",
  category: hoodie?.category || "",
  selectedColor,
  selectedSize
});



const sendCheckout = () => {
  // Save the heading to localStorage
  localStorage.setItem("heading", JSON.stringify(heading));
 
  // Navigate to the display page
  router.push("/checkout");
};









const handleCheckout = () => {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.setItem("heading", JSON.stringify(cartItems)); // Save the cart
  router.push("/checkout");
};

console.log(cartItems);
  return (
   
      <>
 <nav className='flex items-center  justify-between '>

  <ul className='flex item-center lg:px-7' >
    {/* <li className=''> <MdMenu className='h-[5vh] w-[10vw] lg:h-[4vh] lg:w-[4vw]'/></li> */}
  {/* <li  className='' onClick={() => setIsVisible(true)}>   < IoCloseSharp className='h-[5vh] w-[10vw] lg:block lg:h-[4vh] lg:w-[4vw] z-50'/></li> */}
   <li  className='cursor-pointer' onClick={() => setIsVisible(true)}>  <MdMenu className='h-[5vh] w-[10vw] lg:block lg:h-[4vh] lg:w-[4vw] z-100'/></li> 
    
   {isVisible && (
    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
  
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col bg-white shadow-xl">
              <div className="flex-1 px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold lg:text-2xl text-gray-900 last:border-b border-black " id="slide-over-title">Menu</h2>
             
  
                  <div className="ml-3 flex h-7 items-center">
                    <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setIsVisible(false)}>
                      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
  
                {/* Menu items below */}
                <div className="mt-4 -y-4">
                 
                  <div className="cursor-pointer hover:text-blue-500 font-mono py-1">Oversized T-Shirts</div>
                  <div className="cursor-pointer hover:text-blue-500 font-mono py-1">New Arrivals</div>
                  <div className="cursor-pointer hover:text-blue-500 font-mono py-1">Bottoms</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Pink</div>
                  <Link href="/hoodies" className="cursor-pointer hover:text-blue-500  font-mono py-1">Hoodies & Sweatshirt</Link>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Outerwear</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Hearwear</div>
                  <div className="cursor-pointer hover:text-blue-500  font-mono py-1">Summer Sale</div>
                  <div className="cursor-pointer hover:text-blue-500 last:border-b border-black my-5"></div>
                </div>
  
                {/* Contact Info */}
                <div className="mt-3 space-y-1">
                  <div className="text-gray-700">Login</div>
                  <div className="text-gray-700 last:border-b border-black py-4">Create Account</div>
                </div>
   

                <div className="mt-6 space-y-1">
                  <div className="text-gray-700">Email: example@example.com</div>
                  <div className="text-gray-700 last:border-b border-black ">Phone: +123 456 7890</div>
                </div>


                {/* Social Media Icons */}
                <div className="mt-6 flex space-x-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0H1.325C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.488v-9.294H9.692v-3.622h3.121V9.412c0-3.133 1.845-4.872 4.678-4.872 1.354 0 2.744.27 3.19.406v3.744h-2.26c-1.769 0-2.155.841-2.155 2.107v2.777h4.31l-.56 3.622h-3.75v9.294h7.354c.733 0 1.325-.592 1.325-1.325V1.325C24 .592 23.408 0 22.675 0z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.168 0 3.536.012 4.785.07 1.124.051 1.774.225 2.207.378.608.198 1.07.46 1.523.913.454.454.716.916.913 1.523.153.433.327 1.083.378 2.207.058 1.249.07 1.617.07 4.785s-.012 3.536-.07 4.785c-.051 1.124-.225 1.774-.378 2.207-.198.608-.46 1.07-.913 1.523-.454.454-.916.716-1.523.913-.433.153-1.083.327-2.207.378-1.249.058-1.617.07-4.785.07s-3.536-.012-4.785-.07c-1.124-.051-1.774-.225-2.207-.378-.608-.198-1.07-.46-1.523-.913-.454-.454-.716-.916-.913-1.523-.153-.433-.327-1.083-.378-2.207-.058-1.249-.07-1.617-.07-4.785s.012-3.536.07-4.785c.051-1.124.225-1.774.378-2.207.198-.608.46-1.07.913-1.523.454-.454.916-.716 1.523-.913.433-.153 1.083-.327 2.207-.378 1.249-.058 1.617-.07 4.785-.07zM12 0C8.739 0 8.329.008 7.312.068c-1.029.057-1.886.252-2.604.57-.896.369-1.616.889-2.292 1.565-.676.676-1.196 1.396-1.565 2.292-.318.718-.513 1.576-.57 2.604-.06 1.017-.068 1.428-.068 4.785s.008 3.536.068 4.785c.057 1.029.252 1.886.57 2.604.369.896.889 1.616 1.565 2.292.676.676 1.396 1.196 2.292 1.565.718.318 1.576.513 2.604.57 1.017.06 1.428.068 4.785.068s3.536-.008 4.785-.068c1.029-.057 1.886-.252 2.604-.57.896-.369 1.616-.889 2.292-1.565.676-.676 1.196-1.396 1.565-2.292.318-.718.513-1.576.57-2.604.06-1.017.068-1.428.068-4.785s-.008-3.536-.068-4.785c-.057-1.029-.252-1.886-.57-2.604-.369-.896-.889-1.616-1.565-2.292-.676-.676-1.396-1.196-2.292-1.565-.718-.318-1.576-.513-2.604-.57-1.017-.06-1.428-.068-4.785-.068z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      )}




    <li className='px-4'><FaSearch className='h-[5vh] w-[8vw] lg:hidden lg:h-[3.5vh] lg:w-[3.5vw]'/></li>
 
  </ul>
  <ul className='flex item-center px-1'>
  <GiWolfHead className='h-[8vh] w-[12vw]  lg:h-[10vh] lg:w-[6vw]'/>  <h2 className='py-5 font-mono antialiased font-bold text-lg'>
Zadain</h2>
  </ul>
        <ul className='flex lg:px-4'>
        <li className=''><FaSearch className='h-[5vh] w-[8vw] hidden lg:block lg:h-[3.5vh] lg:w-[3.5vw]'/></li>
          <li  className=''> <MdOutlineAccountCircle className='h-[5vh] w-[10vw] lg:block lg:h-[4vh] lg:w-[4vw]'/></li>
        
          <li className="relative" onClick={() => setCartMenu(true)}>
          <IoMdCart className="h-[5vh] w-[10vw] lg:h-[4vh] lg:w-[4vw]" />
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
            {totalItems}
          </span>
        </li>
      


   

        </ul>
      </nav> {cartMenu && (
  <div className="fixed inset-0 bg-gray-500/75 z-50 flex justify-end">
    <div className="h-full w-full max-w-md bg-white shadow-xl transform transition-transform translate-x-0">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Shopping Cart ({totalItems})</h2>
        <button onClick={() => setCartMenu(false)}>
          <IoCloseSharp className="h-6 w-6" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 overflow-y-auto flex-1">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center py-4 border-b">
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              
              {/* Product Info */}
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600"> {item.selectedSize}</p>
                <p className="text-gray-600"> {item.selectedColor}</p>
                <p className="text-gray-600">Rs {item.price} x {item.quantity}</p>
                <p className="text-sm text-gray-500">{item.brand}</p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-2">
                  <button 
                     onClick={handleRemoveToCart} 
                     
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button 
                    onClick={handleAddToCart} 
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>Rs {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
          </div>
          
          <button 
            className="w-full mt-4 bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
            onClick={handleCheckout}
          >
           <Link href="/checkout"> Proceed to Checkout</Link>
          </button>
        </div>
      )}
    </div>
  </div>
)}



    </>
  )
}

export default Navbar
