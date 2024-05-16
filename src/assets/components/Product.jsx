// import { useState, useEfect } from "react";
import {  useNavigate } from "react-router-dom";

const Product = (props) => {
  
  
  const navigate = useNavigate();
  return (
    <>
      <div
        className="z-10"
        id={props.id}
        
        >
        <img
          src={props.img}
          className="w-40 md:w-52 rounded-md"
          alt={props.titulo}
          onClick={() => navigate(`/producto/${props.id}`)}
        />

        <p className="text-2xl text-white">{props.titulo}</p>
        <p className="text-2xl text-white">{props.precio}</p>
        <p className="text-2xl text-white">{props.descripcion}</p>
        <p className="text-2xl text-white">{props.docena}</p>
      </div>
     
    </>
  );
};

export default Product;
