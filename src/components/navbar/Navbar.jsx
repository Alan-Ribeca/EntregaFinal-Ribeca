import { useEffect, useState } from 'react';
import { BotonesNavbar } from "../botonesNavbar/BotonesNavbar";
import "./navbar.scss";
import imgLogo from "/img/logo.png";
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowSearch(location.pathname !== '/cart' && location.pathname !== '/checkout');
  }, [location]);

  return (
    <nav className="navbar">
      <div className="containerNav">
        <img src={imgLogo} className="logoTienda" alt="logo de la tienda" />
        <BotonesNavbar/>
      </div>
      <section className="buscador">
        <div className="group">
          {showSearch && (
            <>
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input placeholder="Buscar..." type="search" className="input" />
            </>
          )}
        </div>
      </section>
    </nav>
  );
};