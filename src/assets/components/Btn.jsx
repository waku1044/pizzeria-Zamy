import { BiCart } from "react-icons/bi";
import { useStore } from "../../store/Store";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Btn = (props) => {

    const [cantidad, setCantidad ] = useState();
    const  tituloProducto = props.dataProducto;
    const msj = props.msj;
    const agregar = useStore((state) => state.agregar);
    
    // const verProductos = useStore((state) => state.verProductos);
    
    
    
    function verificarPedido(){
        let idProducto = uuidv4()
       
        agregar(tituloProducto, cantidad, idProducto)
        Report.success(
            'Agregado al carrito',
            cantidad + ' ' + tituloProducto,
            'Aceptar',
            )
        
    }
 
    
    useEffect(() => {
        setCantidad(props.cantidad);
        // console.log('pedido',pedido)
    });
    
    
    return (
        <>
            <button
                className="bg-lime-600 text-slate-100 py-2 px-5 font-bold hover:bg-lime-900 flex items-center gap-2 rounded-lg "
                onClick={() => {cantidad > 0?verificarPedido() 
                : Report.failure(
                    'No se agregara el Producto ',
                    '"Debe agregar una Cantidad de Producto',
                    'Aceptar',
                    );} }
            >
                <BiCart size={30} /> {msj}
            </button>
           
        </>
    );
};

export default Btn;