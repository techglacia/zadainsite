// app/clientLayout.js
'use client';

import { Provider } from 'react-redux';
import { store } from './redux/store'; // Corrected path
import Navbar from './Navbar/Navbar';
import Product from './product/Product';

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <Navbar />
      {/* <Product/> */}
      {children}
    </Provider>
  );
}
