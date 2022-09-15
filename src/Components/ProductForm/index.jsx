import { useState } from 'react';
import './style.scss';

const index = () => {
  const handleFormData = (e) => {
    console.log('form data: ', e);
    console.log(productName);
  };
  const [productSku, setProductSku] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productType, setProductType] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productHeight, setProductHeight] = useState('');
  const [productWidth, setProductWidth] = useState('');
  const [productLength, setProductLength] = useState('');

  return (
    <form onSubmit={handleFormData} id='form' className='form'>
      <div className='form__group'>
        <label htmlFor='sku'>SKU</label>
        <input type='text' name='sku' id='sku' />
      </div>
      <div className='form__group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className='form__group'>
        <label htmlFor='price'>Price ($)</label>
        <input type='number' name='price' id='price' />
      </div>
      <div className='form__group'>
        <label htmlFor='productType'>Type Switcher</label>
        <select name='cars' id='productType'>
          <option value='typeswitcher' selected disabled>
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
      {productType === 'dvd' ? (
        <div className='form__group'>
          <label htmlFor='size'>Size (MB)</label>
          <input type='number' name='size' id='size' />
        </div>
      ) : productType === 'book' ? (
        <div className='form__group'>
          <label htmlFor='weight'>Weight (KG)</label>
          <input type='number' name='weight' id='weight' />
        </div>
      ) : (
        <div className='form__group--furniture'>
          <div className='form__group'>
            <label htmlFor='height'>height (CM)</label>
            <input type='number' name='height' id='height' />
          </div>
          <div className='form__group'>
            <label htmlFor='width'>width (CM)</label>
            <input type='number' name='width' id='width' />
          </div>
          <div className='form__group'>
            <label htmlFor='length'>length (CM)</label>
            <input type='number' name='length' id='length' />
          </div>
        </div>
      )}
    </form>
  );
};
export default index;
