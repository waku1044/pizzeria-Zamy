import logo from '../img/logo.jpg';
import { BiCartAdd } from "react-icons/bi";
import { useStore } from "../../store/Store";
import { useNavigate } from 'react-router-dom';
const Header = () => {


  const navigate = useNavigate();
  const total = useStore((state) => state.total);
  return (
    <>
    <header className="flex justify-center items-center py-3 bg-amber-500 relative">
            <p className="text-2xl px-2 fs-2 text-red-800 font-semibold ">Pizzeria</p>
            <img src={logo} className="rounded-full w-32"  alt="logo"/>
            <p className="text-2xl px-2 text-red-800 font-semibold">Zamy</p>
            <BiCartAdd size={40} className="text-red-800 font-semibold absolute right-10 top-24 " onClick={() => navigate('/carrito')} />
            <p className=" px-2 text-red-800 bg-slate-200 rounded-full font-semibold absolute right-5 top-28">{total}</p>
        </header>
        
    </>
  )
}
export default Header;