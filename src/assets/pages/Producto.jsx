import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BtnAtras from "../components/BotonAtras";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Imagenes from "../img/Imagenes";
import Btn from "../components/Btn";
import "../css/pageProducto.css";


const Producto = () => {
  const [contador, setContador] = useState(0);
  const [dataProducto, setDataProducto] = useState({});

  const params = useParams();

  

  useEffect(() => {
    if (contador < 0) setContador(0);
    

    setDataProducto(Imagenes[params.id]);
  }, [contador]);

  return (
    <>
      <Header />
      <div className="fondoProducto bg-slate-500 flex items-center justify-center py-10 flex-col border-2">
       <BtnAtras msj="Volver"/>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2   bg-white">
          <div className="flex justify-center items-center  ">
            <img
              src={dataProducto.img}
              className="card-img-top md:rounded-full"
              alt={dataProducto.titulo}
            />
          </div>
          <div className="card-body bg-red-200 flex flex-col  items-center gap-1">
            <h5 className="card-title font-bold text-3xl my-5 ">{dataProducto.titulo}</h5>
            <p className="card-text font-medium text-xl">{dataProducto.precio}</p>
            <p className="card-text font-medium text-xl">{dataProducto.docena}</p>
            {dataProducto.descripcion && <p className="card-text px-5">Ingredientes: <br/>{dataProducto.descripcion}</p>}
            <div className="card-footer flex flex-col gap-5 py-5">
              <div className=" flex justify-center">
                <button
                  className="bg-red-600 text-slate-100 px-5 font-bold hover:bg-red-800 w-1/2 rounded-full"
                  onClick={() => setContador(contador - 1)}
                >
                  -
                </button>
                <span className="bg-gray-200 px-5 text-center text-red-800  font-bold w-1/2">
                  {contador}
                </span>
                <button
                  className="w-1/2 bg-lime-600 text-slate-100 px-5 font-bold hover:bg-lime-800 rounded-full"
                  onClick={() => setContador(contador + 1)}
                >
                  +
                </button>
              </div>
                <Btn msj="Añadir al carrito" dataProducto={dataProducto.titulo} cantidad={contador}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Producto;
