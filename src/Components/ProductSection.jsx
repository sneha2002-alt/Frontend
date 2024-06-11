import React, { useEffect, useState } from 'react';
import { BsDot } from 'react-icons/bs';
import './ProductSection.css';
import { IoBookmarkOutline } from 'react-icons/io5';
import axios from 'axios';

const ProductSection = () => {
  const [productList, setProductList] = useState('');

  useEffect(() => {
    //get product api
    axios
      .get('https://tanntrimbackend.onrender.com/products')
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    // Products Section
    <div className="productSection">
      {/* Product Header */}
      <div className="productHeader">
        <div className="productCategory">
          <p>Bags</p>
          <span className="dot">
            <BsDot />
          </span>
          <p>Backpacks</p>
        </div>
        <div className="productCategory">
          <p>13 products</p>
          <img className="upImage" src="Images/up.png" alt="Total" />
        </div>
      </div>
      {/* List of products */}
      <ul className="productList">
        {productList &&
          productList?.map((data) => (
            <li key={data.id} className="productCard">
              <img className="productImage" src={data.image} alt={data.title} />
              <div className="productInfo">
                <h3 className="productTitle">{data.title}</h3>
                <div className="priceSection">
                  <p className="priceCard">
                    &#8377; {data.discountedPrice}{' '}
                    <span className="originalPrice">{data.originalPrice}</span>
                    <span className="percentageOff">
                      ﹙{data.percentageOff} Off﹚
                    </span>
                  </p>
                  <img className="add" src="Images/add-product.png" alt="add" />
                </div>
              </div>
              <IoBookmarkOutline className="bookmark" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductSection;
