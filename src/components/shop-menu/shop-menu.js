import React from "react";

export const ShopMenu = props => {
  const { shopMenu } = props;
  return (
    <span className="shopMenu">
      <span className="wrapperCategories">
        {shopMenu.map((elem, i) => {
          let img = require(`../../assets/img/shopMenu/${elem.img}`);
          return (
            <div key={i} className="category">
              <div className="categoryInfo">
                <img src={img} alt="" />
                <div className="category-text">{elem.text}</div>
              </div>
            </div>
          );
        })}
      </span>
    </span>
  );
};
