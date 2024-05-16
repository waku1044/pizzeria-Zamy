import { BiCart } from "react-icons/bi";
import { useStore } from "../../store/Store";
import { useState,useEffect } from "react";

const Btn = (props) => {

    const [cantidad, setCantidad ] = useState(props.cantidad);
    const  dataProducto = props.dataProducto;
    const msj = props.msj;
    const agregar = useStore((state) => state.agregar);
    const pedido = useStore((state) => state.pedido);
    
    
    
    useEffect(() => {
        setCantidad(props.cantidad);
       
    }, [props.cantidad]);
    
    
    return (
        <>
            <button
                className="bg-lime-600 text-slate-100 py-2 px-5 font-bold hover:bg-lime-900 flex items-center gap-2 rounded-lg "
                onClick={() => {agregar({nombre:dataProducto.titulo,
                cantidad: cantidad})} }
            >
                <BiCart size={30} /> {msj}
            </button>
           
        </>
    );
};

export default Btn;