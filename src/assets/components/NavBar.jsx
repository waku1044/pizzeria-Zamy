

const NavBar = (props) => {
function handleClick(e) {
  props.menu(e.target.innerText);
}

  return (
    <>
      <nav className="flex justify-around items-center py-3 bg-red-800">
        <h3 className="text-3xl text-orange-300 hidden sm:block">Pizzeria Zamy</h3>
        <div className="flex gap-7 overflow-x-auto sm:overflow-hidden px-5">
          <button className="text-2xl text-orange-50 hover:text-lime-300 hover:scale-125 " onClick={handleClick}>Pizzas</button>
          <button className="text-2xl text-orange-50  hover:text-lime-300 hover:scale-125" onClick={handleClick}>Empanadas</button>
          <button className="text-2xl text-orange-50  hover:text-lime-300 hover:scale-125" onClick={handleClick}>Bebidas</button>
          <button className="text-2xl text-orange-50  hover:text-lime-300 hover:scale-125" onClick={handleClick}>Postres</button>
        </div>
      </nav>
    </>
  );
};  

export default NavBar;
