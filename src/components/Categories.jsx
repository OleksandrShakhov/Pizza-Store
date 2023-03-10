import React from 'react';


function Categories({ value, onChangeCategory }) {
//const [activeIndex, setActiveIndex] = React.useState(0);
const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {
          categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : ''}>
              {categoryName}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories;