import React from "react";


function Sort({ value, onChangeSort }) {
  // hook to open and close popup
  const [open, setOpen] = React.useState(false);

  // list of categories
  const sortCategories = [
    {name: 'popularity(asc)', sortProperty: 'rating'},
    {name: 'popularity(desc)', sortProperty: '-rating'},
    {name: 'price(asc)', sortProperty: 'price'}, 
    {name: 'price(desc)', sortProperty: '-price'}, 
    {name: 'alphabetically(asc)', sortProperty: 'title'},
    {name: 'alphabetically(desc)', sortProperty: '-title'}
  ];

  // function to change the value of the active category
  const onClickCategory = (index) => {
    //change the value(sortCategories) (index) 0, 1, 2 
    onChangeSort(index);
    //close the popup
    setOpen(false);
  };



  return (
    <div className="sort">
      <div className="sort__label">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      
      {
      //if open is true, than open the popup
      open && (
        <div className="sort__popup">
          <ul>
            {
              sortCategories.map((obj, index) => (
                <li
                  key={index}
                  className={value.sortProperty === obj.sortProperty ? "active" : ''}
                  onClick={() => onClickCategory(obj)}
                  >{obj.name}
                </li>
              ))
            
            /*<li className="active">popularity</li>
            <li>price</li>
            <li>alphabetically</li>*/
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort;