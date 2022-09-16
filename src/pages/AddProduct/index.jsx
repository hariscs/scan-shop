import { useState } from 'react';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const AddProduct = () => {
  const [productSku, setProductSku] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [dvdSize, setdvdSize] = useState('');
  const [bookWeight, setBookWeight] = useState('');
  const [furnitureHeight, setFurnitureHeight] = useState('');
  const [furnitureWidth, setFurnitureWidth] = useState('');
  const [furnitureLength, setFurnitureLength] = useState('');
  const [optionValue, setOptionValue] = useState('typeswitcher');

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const typeValidation = () => {
    if (optionValue) {
      if (optionValue === 'dvd') {
        if (dvdSize) {
          return true;
        } else {
          return false;
        }
      }
      if (optionValue === 'book') {
        if (bookWeight) {
          return true;
        } else {
          return false;
        }
      }
      if (optionValue === 'furniture') {
        if (furnitureHeight && furnitureLength && furnitureWidth) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };
  const handleFormData = () => {
    if (productSku && productName && productPrice && typeValidation()) {
      const productAttributes =
        optionValue === 'dvd'
          ? { dvd: [{ size: dvdSize }] }
          : optionValue === 'book'
          ? { book: [{ weight: bookWeight }] }
          : {
              furniture: [
                { height: furnitureHeight },
                { width: furnitureWidth },
                { length: furnitureLength },
              ],
            };

      const productData = {
        sku: productSku,
        name: productName,
        price: productPrice,
        productType: optionValue,
        attributes: productAttributes,
      };

      postData(productData);
      setError(false);
    } else {
      setError(true);
    }
  };

  const postData = async (productData) => {
    try {
      const res = await fetch(
        'https://scandi-shop.000webhostapp.com/api/addproduct.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
          mode: 'no-cors',
        }
      );
      window.open('/', '_self');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='product'>
      <div className='product__header'>
        <h2 className='product__title'>Product Add</h2>
        <div className='product__btns'>
          <Button type='submit' onClick={handleFormData} children='Save' />
          <Button onClick={() => navigate('/')} children='Cancel' />
        </div>
      </div>

      <div className='product__form'>
        <form id='product_form' className='form'>
          {error && <p className='error'>Please, submit required data</p>}
          <div className='form__group'>
            <label htmlFor='sku'>SKU</label>
            <input
              type='text'
              name='sku'
              id='sku'
              value={productSku}
              onChange={(e) => setProductSku(e?.target?.value)}
              placeholder='sku'
            />
          </div>
          <div className='form__group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={productName}
              onChange={(e) => setProductName(e?.target?.value)}
              placeholder='name'
            />
          </div>
          <div className='form__group'>
            <label htmlFor='price'>Price ($)</label>
            <input
              type='number'
              name='price'
              id='price'
              value={productPrice}
              onChange={(e) => setProductPrice(e?.target?.value)}
              placeholder='price'
            />
          </div>
          <div className='form__group'>
            <label htmlFor='productType'>Type Switcher</label>
            <select
              name='type'
              id='productType'
              value={optionValue}
              onChange={(e) => setOptionValue(e?.target?.value)}
            >
              <option value='typeswitcher' disabled>
                Type Switcher
              </option>
              <option value='dvd' id='DVD'>
                DVD
              </option>
              <option value='furniture' id='Furniture'>
                Furniture
              </option>
              <option value='book' id='Book'>
                Book
              </option>
            </select>
          </div>
          {error && (
            <span className='error'>
              Please, provide the data of indicated type
            </span>
          )}
          {optionValue === 'dvd' ? (
            <>
              <div className='form__group'>
                <label htmlFor='size'>Size (MB)</label>
                <input
                  type='number'
                  name='size'
                  id='size'
                  value={dvdSize}
                  onChange={(e) => setdvdSize(e?.target?.value)}
                  placeholder='size'
                />
              </div>
              <p className='form__desc'>Please Provide Size</p>
            </>
          ) : optionValue === 'book' ? (
            <>
              <div className='form__group'>
                <label htmlFor='weight'>Weight (KG)</label>
                <input
                  type='number'
                  name='weight'
                  id='weight'
                  value={bookWeight}
                  onChange={(e) => setBookWeight(e?.target?.value)}
                  placeholder='weight'
                />
              </div>
              <p className='form__desc'>Please Provide Weight</p>
            </>
          ) : optionValue === 'furniture' ? (
            <div className='form__group--furniture'>
              <div className='form__group'>
                <label htmlFor='height'>height (CM)</label>
                <input
                  type='number'
                  name='height'
                  id='height'
                  value={furnitureHeight}
                  onChange={(e) => setFurnitureHeight(e?.target?.value)}
                  placeholder='height'
                />
              </div>
              <div className='form__group'>
                <label htmlFor='width'>width (CM)</label>
                <input
                  type='number'
                  name='width'
                  id='width'
                  value={furnitureWidth}
                  onChange={(e) => setFurnitureWidth(e?.target?.value)}
                  placeholder='width'
                />
              </div>
              <div>
                <div className='form__group'>
                  <label htmlFor='length'>length (CM)</label>
                  <input
                    type='number'
                    name='length'
                    id='length'
                    value={furnitureLength}
                    onChange={(e) => setFurnitureLength(e?.target?.value)}
                    placeholder='length'
                  />
                </div>
                <p className='form__desc'>
                  Please Provide dimensions in HxLxW format
                </p>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
};
export default AddProduct;
