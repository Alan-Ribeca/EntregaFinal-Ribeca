import { Link } from "react-router-dom";
import "./notFound.scss";

export const NotFound = () => {
  return (
    <section className="errorPag">
      <p className="texto">Error... pagina no existente</p>
      <h1 className="error">404</h1>
      <p className="volver">
        <Link to={"/"}>
          <strong className="inicio">Click aqui</strong>
        </Link>
        para volver al inicio
      </p>
    </section>
  );
};
