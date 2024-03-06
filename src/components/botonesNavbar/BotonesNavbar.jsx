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
        <Link to={"/category/Pc"}>
          <button className="botonNav"> Pc </button>
        </Link>
        <Link to={"/category/Celular"}>
          <button className="botonNav"> Celulares </button>
        </Link>
        <Link to={"/category/Monitor"}>
          <button className="botonNav"> Monitores </button>
        </Link>
        <Link to={"/category/accesorios"}>
          <button className="botonNav"> Accesorios </button>
        </Link>
        <CartWidget />
      </div>
    </>
  );
};
