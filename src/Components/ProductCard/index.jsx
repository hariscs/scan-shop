import { useEffect, useState } from 'react';
import './style.scss';

let formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const ProductCard = ({ productData, toggleProducts }) => {
  const { sku, name, price, attributes, id } = productData;
  const productAttributes = JSON.parse(attributes);
  const [attributesData, setAttributesData] = useState([]);

  useEffect(() => {
    Object?.values(productAttributes)?.map((data) => setAttributesData(data));
  }, [productData]);

  return (
    <div className='card'>
      {/* product card delete checkbox */}
      <div className='card__checkbox'>
        <input
          type='checkbox'
          name='checkproduct'
          onChange={() => toggleProducts(id)}
          id='checkproduct'
          className='delete-checkbox'
        />
      </div>
      {/* product card info */}
      <div className='card__info'>
        <p className='card__info--sku'>{sku}11</p>
        <h2 className='card__info--title'>{name}</h2>
        <p className='card__info--price'> {formatCurrency?.format(price)}</p>
        <div className='card__info--attributes'>
          {Object?.keys(productAttributes)[0] === 'dvd' ? (
            attributesData.map((data, i) => (
              <div key={i}>
                Size: <span>{data?.size}</span> MB
              </div>
            ))
          ) : Object?.keys(productAttributes)[0] === 'book' ? (
            attributesData?.map((data, i) => (
              <div key={i}>
                Weight: <span>{data?.weight}</span> KG
              </div>
            ))
          ) : (
            <>
              Dimension:{' '}
              {attributesData[0] && (
                <span>
                  {attributesData[0]?.height}x{attributesData[1]?.width}x
                  {attributesData[2]?.length}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
