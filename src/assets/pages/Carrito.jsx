import { useStore } from "../../store/Store";

const Carrito = () => {
    const pedido = useStore((state) => state.pedido);

    return (
        <div>
            <h2 className="text-3xl font-bold">Controla tu  pedido : </h2>
            <ol className="text-2xl ps-10">
                {pedido.map((item, index) => 
                
                    <li key={index}>
                        {item.nombre} - Cantidad: {item.cantidad}
                    </li>

                
                )}
            </ol>
        </div>
    );
};

export default Carrito;
