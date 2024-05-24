import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import imagenes from "../img/Imagenes";
import Product from "../components/Product";
import "../css/principal.css";
import { useState, useEffect } from "react";

const Principal = () => {
  const [producto, setProducto] = useState(imagenes);

  function menu(text) {
    var lista = [];

    switch (text) {
      case "Pizzas":
        for (let i = 0; i < 3; i++) {
          lista.push(imagenes[i]);
          setProducto(lista);
          // console.log(listaPrecios.map((p) => p.titulo));
        }

        break;
      case "Empanadas":
        for (let i = 3; i < 6; i++) {
          lista.push(imagenes[i]);
          setProducto(lista);
        }
        break;
      case "Bebidas":
        for (let i = 6; i < 9; i++) {
          lista.push(imagenes[i]);
          setProducto(lista);
        }
        break;
      case "Postres":
        for (let i = 9; i < 12; i++) {
          lista.push(imagenes[i]);
          setProducto(lista);
        }
        break;
      default:
        break;
    }
  }
  return (
    <>
      <Header />
      <NavBar menu={menu} />

      <div className="subtitulo container-fluid bg-zinc-800">
        <div className="z-10 relative py-14">
          <h4 className="text-4xl text-center text-white">
            Nuestros Productos
          </h4>
          <p className="text-2xl text-center text-white">
            En esta sección encontrarás todos los productos que tenemos en
            existencia
          </p>
        </div>
        <div className="madera flex justify-end flex-wrap  gap-y-10 md:grid md:grid-cols-3    border-red-500  py-14 px-5 mx-auto">
          {producto.map((imagen, index) => (
            <div key={index} className="text-center w-1/2  z-10 ">
              <Product
                img={imagen.img}
                
                id={index}
                titulo={imagen.titulo}
                precio={imagen.precio}
                docena={imagen.docena}
                description={imagen.descripcion}
               
                
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Principal;
