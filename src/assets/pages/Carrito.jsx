import { useStore } from "../../store/Store";
import Btn from "../components/Btn";
import BtnAtras from "../components/BotonAtras";
import { RiDeleteBinLine } from "react-icons/ri";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../css/carrito.css';

const Carrito = () => {
  const pedido = useStore((state) => state.pedido);
  const vaciar = useStore((state) => state.vaciar);

  console.log(pedido);  

  return (
    <div className="fondoMesada">
    <Header />
      <BtnAtras msj="Volver"  />
      <h2 className="text-3xl px-5 font-bold ms-10 mt-10 rounded bg-slate-300 inline">Controle su pedido : </h2>
      <div className="w-3/4 mx-auto   py-10 border my-10 bg-red-100 rounded shadow-xl ms-5">
        <ol className="text-2xl ps-10 ">
          {pedido && pedido.map((item) => (
            <li key={item.id}>
              {item.producto} / Cantidad : {item.cantidad}
              <button className=" ms-5 "></button>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex gap-5 ms-5 pb-10">
        <Btn msj="Encargar" />
        <button className="bg-red-600 hover:bg-red-900 py-3 px-6 flex text-white font-bold rounded-xl w-42" onClick={vaciar}>
          <RiDeleteBinLine size={30} className="me-5" />
          Eliminar todo
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Carrito;
