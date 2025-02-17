import React from 'react';
import Link from 'next/link';

const OrderPlaced = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Congrats! You just made Zadain's day. Your order’s cooking... not literally! {'\u{1F602}'}</p>
      <Link href="/">  <button
          type="button"
          className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          Back to Home
        </button></Link>
      </div>
    </div>
  );
};

export default OrderPlaced;
