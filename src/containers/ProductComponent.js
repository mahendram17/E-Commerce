import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  console.log("products in component", products);
 
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
  
    return (
      <div className="four wide column" key={id}>
          {Object.keys(product).length === 0 ? (
      <div><Audio/></div>
    ) : (
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
    )}
      </div>
    );
  });

  return <>
  
  {renderList}</>;
}
