import React, { useEffect, useState } from "react";
import Counter from "../Redux/Counter";
import { update } from "./ProdSlice";
import { useDispatch } from "react-redux";

function Product() {
  let dis = useDispatch()
  let [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((n) => n.json())
      .then((n) => setState(n));
    },[]);
    console.log(state);
  const cards = state.map((prod) => (
    <div className="ui">
      <div>
        <img src={prod.image} alt="" />
      </div>
      <h2>{prod.title}</h2>
      <p>${prod.price}</p>
      <button onClick={()=>dis(update(prod))}>Add to Cart</button>
    </div>
  ));
  return (
    <>
      <h1 className="h1">Products</h1>
      <div className="prod">{cards}</div>
      <Counter/>
    </>
  );
}

export default Product;
