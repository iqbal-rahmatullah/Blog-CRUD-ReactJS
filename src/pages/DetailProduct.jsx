import React from "react";
import { useParams } from "react-router-dom";
import { allProduct } from "../allProduct";
import Navigations from "../components/Navigations";

function DetailProduct() {
  const { product_id } = useParams();
  const result = allProduct.find((e) => e.id === product_id);
  console.log(result);
  return (
    <div>
      <Navigations />
      <hr />
      <ul>
        <h1>{result.name}</h1>
        <li>
          <p>Harga : Rp.{result.price}</p>
        </li>
        <li>
          <p>{result.description}</p>
        </li>
        <img src={result.image} alt='Laptop' className='imgLaptop' />
        <li>
          Specification :
          <ul>
            <li>{result.specification.cpu}</li>
            <li>{result.specification.memory}</li>
            <li>{result.specification.storage}</li>
            <li>{result.specification.vga}</li>
            <li>{result.specification.display}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default DetailProduct;
