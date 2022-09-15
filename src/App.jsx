import { Routes, Route } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import AllProducts from './pages/AllProducts';

import './main.scss';
import { useEffect, useState } from 'react';

function App() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch('https://scandi-shop.000webhostapp.com/api/allproducts.php')
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<AllProducts productsData={productsData} />} />
        <Route path='/addproduct' element={<AddProduct />} />
      </Routes>
      <footer className='footer'>
        <p className='footer__text'>Scan Shop</p>
      </footer>
    </div>
  );
}

export default App;
