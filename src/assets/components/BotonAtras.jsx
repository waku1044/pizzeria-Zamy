import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BtnAtras = ({msj}) => {
    return (
        <>
             <Link onClick={() => window.history.back()} className="self-start  mb-10">
          <button className="bg-orange-400 ms-5 my-10 text-slate-100 px-5 font-bold hover:bg-orange-600 flex items-center gap-2 rounded-lg">
            <BiArrowBack size={30} /> {msj}
          </button>
        </Link>
        </>
    );
};

export default BtnAtras;