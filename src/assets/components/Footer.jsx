import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="flex justify-around items-center py-3 bg-gray-800 ">
        <div>
          <p className="text-xl px-2 fs-2 text-amber-400 font-semibold font-shadow-classic">
            Pizzeria Zamy.
          </p>
          <p className="text-xl px-2 text-white ">
            Todos los derechos reservados.
          </p>
        </div>

        <p className="text-xl px-2 text-amber-400 font-semibold">
          Diseñado por <Link to="https://www.destinoweb.com.ar" target="_blank">Destino Web</Link> | 2022.
        </p>
      </footer>
    </>
  );
};

export default Footer;
