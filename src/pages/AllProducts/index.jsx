import Button from '../../Components/Button';
import ProductCard from '../../Components/ProductCard';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const AllProducts = ({ productsData }) => {
  const navigate = useNavigate();
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Product List</h1>
        <div className='header__btns'>
          <Button onClick={() => navigate('/addproduct')}>ADD</Button>
          <Button onClick={() => console.log('deleted')}>MASS DELETE</Button>
        </div>
      </header>
      <main className='products'>
        <div className='products__cards'>
          {productsData
            ?.sort((a, b) => b?.id - a?.id)
            ?.map((data) => (
              <ProductCard productData={data} key={data.id} />
            ))}
        </div>
      </main>
    </>
  );
};

export default AllProducts;
