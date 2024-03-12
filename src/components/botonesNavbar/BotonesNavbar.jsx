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

  const clickSummary = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <label className="hamburger">
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      <div className="botonesNavbar">
        <Link to={"/"}>
          <button className="botonNav">Inicio</button>
        </Link>
        <details
          className="botonNav"
          open={dispositivosAbierto}
          onClick={toggleDispositivos}
        >
          <summary className="summary" onClick={clickSummary}>
            Dispositivos
          </summary>
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
          <summary className="summary" onClick={clickSummary}>
            Periféricos
          </summary>
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
    </>
  );
};
