import { Routes, Route } from 'react-router-dom';
import AddProduct from './pages/AddProduct';
import AllProducts from './pages/AllProducts';

import './main.scss';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/addproduct' element={<AddProduct />} />
      </Routes>
      <footer className='footer'>
        <p className='footer__text'>Scan Shop</p>
      </footer>
    </div>
  );
}

export default App;
