import React from "react";

const CategoryItems = ({ item }) => {
  return (
    <div className="container">
        <div className="cat-img">
          <img src={item.img} alt="image" />
          <div className="info">
          <h1>{item.title}</h1>
          <button>SHOP NOW</button>
        </div>
        </div>
    </div>
  );
};

export default CategoryItems;
