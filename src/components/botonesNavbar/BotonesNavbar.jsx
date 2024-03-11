import "./botonesNavbar.scss";
import { useState, useEffect } from "react";
import { CartWidget } from "../cardtWidget/CartWidget";
import { Link, useLocation } from "react-router-dom";

export const BotonesNavbar = () => {
  const [dispositivosAbierto, setDispositivosAbierto] = useState(false);
  const [perifericosAbierto, setPerifericosAbierto] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDispositivosAbierto(false);
    setPerifericosAbierto(false);
  }, [location]);

  const toggleDispositivos = () => {
    setDispositivosAbierto(!dispositivosAbierto);
  };

  const togglePerifericos = () => {
    setPerifericosAbierto(!perifericosAbierto);
  };

  const closeDetails = () => {
    setDispositivosAbierto(false);
    setPerifericosAbierto(false);
  };

  return (
    <div className="botonesNavbar">
      <Link to={"/"}>
        <button className="botonNav">Inicio</button>
      </Link>
      <details
        className="botonNav"
        open={dispositivosAbierto}
        onClick={toggleDispositivos}
      >
        <summary>Dispositivos</summary>
        <ul>
          <Link to={"/category/Pc"}>
            <li className="liBotones" onClick={closeDetails}>
              Pc
            </li>
          </Link>
          <Link to={"/category/Netbook"}>
            <li className="liBotones" onClick={closeDetails}>
              Netbook
            </li>
          </Link>
          <Link to={"/category/Celular"}>
            <li className="liBotones" onClick={closeDetails}>
              Celulares
            </li>
          </Link>
        </ul>
      </details>
      <details
        className="botonNav"
        open={perifericosAbierto}
        onClick={togglePerifericos}
      >
        <summary>Periféricos</summary>
        <ul>
          <Link to={"/category/Monitor"}>
            <li className="liBotones" onClick={closeDetails}>
              Monitor
            </li>
          </Link>
          <Link to={"/category/accesorios"}>
            <li className="liBotones" onClick={closeDetails}>
              Auriculares
            </li>
          </Link>
          <Link to={"/category/Componente"}>
            <li className="liBotones" onClick={closeDetails}>
              Componentes
            </li>
          </Link>
        </ul>
      </details>
      <CartWidget />
    </div>
  );
};
