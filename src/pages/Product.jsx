import React from "react";
import { useNavigate } from "react-router-dom";
import { allProduct } from "../allProduct";
import Navigations from "../components/Navigations";
import "./Product.css";

function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <Navigations />
      <hr />
      <h1>Product Page</h1>
      <hr />
      <div className='allbox'>
        {allProduct.map((e) => (
          <div key={e.id} className='productbox'>
            <h3>{e.name}</h3>
            <p>Harga : Rp.{e.price}</p>
            <p>{e.description}</p>
            <img src={e.image} alt='Laptop' className='imgLaptop' />
            <br></br>
            <button
              onClick={() => {
                navigate(`/product/${e.id}`);
              }}>
              Lihat Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
