import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./assets/pages/Principal";
import Carrito from "./assets/pages/Carrito.jsx";
import Producto from "./assets/pages/Producto.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<Producto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
