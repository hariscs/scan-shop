import Button from '../../Components/Button';
import ProductCard from '../../Components/ProductCard';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { useState, useEffect } from 'react';

const AllProducts = () => {
  const navigate = useNavigate();
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const toggleProducts = (productId) => {
    if (selectedProductsIds?.includes(productId)) {
      const filteredProducts = selectedProductsIds.filter(
        (prod) => prod?.id !== productId
      );
      setSelectedProductsIds(filteredProducts);
    } else {
      setSelectedProductsIds([...selectedProductsIds, productId]);
    }
  };

  // delete products
  const deleteProducts = async () => {
    try {
      const res = await fetch(
        'https://scandi-shop.000webhostapp.com/api/deleteproduct.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(selectedProductsIds),
          mode: 'no-cors',
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  // get all products
  useEffect(() => {
    fetch('https://scandi-shop.000webhostapp.com/api/allproducts.php')
      ?.then((res) => res.json())
      ?.then((data) => setProductsData(data))
      ?.catch((err) => console.log(err));
  }, [deleteProducts]);

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Product List</h1>
        <div className='header__btns'>
          <Button onClick={() => navigate('/addproduct')}>ADD</Button>
          <Button onClick={deleteProducts} pid='delete-product-btn'>
            MASS DELETE
          </Button>
        </div>
      </header>
      <main className='products'>
        <div className='products__cards'>
          {productsData
            ?.sort((a, b) => b?.id - a?.id)
            ?.map((data) => (
              <ProductCard
                toggleProducts={toggleProducts}
                productData={data}
                key={data.id}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export default AllProducts;
