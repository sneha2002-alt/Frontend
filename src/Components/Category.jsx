import React from 'react';
import { category_list } from '../data/data';
import './Category.css';

const Category = () => {
  return (
    // category container
    <div className="category">
      {/* category section */}
      <ul className="categoryList">
        {/* category-items */}
        {category_list.map((data) => (
          <li className="categoryItem" key={data.id}>
            <img className="categoryImage" src={data.image} alt={data.name} />
            <p className="categoryName">{data.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
