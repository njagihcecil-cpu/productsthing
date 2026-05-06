import { useState } from "react";
import "./ProductCard.css"
// import Button from "./Button";

export default function ProductCard({product, setCart}) {
    const {title, category, price, image} = product

    
    function handleOnclick(){
      setCart(
          (prev)=> [...prev, title]
        )

    }

  return (
    <div className="product-container">
      {/* <img src={image} className="product-card" alt="..." /> */}
      <div className="product-card">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {category}
        </p>
        <p>Ksh.{price}</p>
        {/* <Button handleOnclick = {()=> handleOnclick()}/> */}
        <button className="product-card" onClick={()=> handleOnclick()}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
