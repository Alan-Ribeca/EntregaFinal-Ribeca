import "./botonesNavbar.scss";
import { useState, useEffect } from "react";
import { CartWidget } from "../cardtWidget/CartWidget";
import { Link, useLocation } from "react-router-dom";
import { abrir, cerrar } from "./AbrirMenu";

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
      <div className="botonPrueba" onClick={abrir}>
        <CartWidget />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="47"
          fill="currentColor"
          className="abrir"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>

      <div className="movil">
        <button className="btnMovil" onClick={cerrar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="currentColor"
            className="home"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
            <path
              fillRule="evenodd"
              d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <ul className="ulMovil">
          <Link to={"/"}>
            <li className="liMovil">Inicio</li>
          </Link>
          <hr />
          <Link to={"/category/Pc"}>
            <li className="liMovil">Pc</li>
          </Link>
          <hr />
          <Link to={"/category/Netbook"}>
            <li className="liMovil">Netbook</li>
          </Link>
          <hr />
          <Link to={"/category/Celular"}>
            <li className="liMovil">Celulares</li>
          </Link>
          <hr />
          <Link to={"/category/Monitor"}>
            <li className="liMovil">Monitores</li>
          </Link>
          <hr />
          <Link to={"/category/accesorios"}>
            <li className="liMovil">Accesorios</li>
          </Link>
          <hr />
          <Link to={"/category/Componente"}>
            <li className="liMovil">Auriculares</li>
          </Link>
        </ul>
      </div>

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
