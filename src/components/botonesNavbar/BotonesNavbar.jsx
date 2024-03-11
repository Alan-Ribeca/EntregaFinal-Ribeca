import "./botonesNavbar.scss";
import { CartWidget } from "../cardtWidget/CartWidget";
import { Link } from "react-router-dom";

export const BotonesNavbar = () => {
  return (
    <>
      <div className="botonesNavbar">
        <Link to={"/"}>
          <button className="botonNav"> Inicio </button>
        </Link>
        <details className="botonNav">
          <summary>Dispositivos</summary>
          <ul>
            <Link to={"/category/Pc"}>
              <li className="liBotones">Pc</li>
            </Link>
            <Link to={"/category/Netbook"}>
              <li className="liBotones">Netbook</li>
            </Link>
            <Link to={"/category/Celular"}>
              <li className="liBotones">Celulares</li>
            </Link>
          </ul>
        </details>
        <details className="botonNav">
          <summary>Perifericos</summary>
          <Link to={"/category/Monitor"}>
            <li className="liBotones">Monitor</li>
          </Link>
          <Link to={"/category/accesorios"}>
            <li className="liBotones">Auriculares</li>
          </Link>
          <Link to={"/category/Componente"}>
            <li className="liBotones">Componentes</li>
          </Link>
        </details>
        <CartWidget />
      </div>
    </>
  );
};
