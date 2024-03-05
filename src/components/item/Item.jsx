/* eslint-disable react/prop-types */
import "./item.scss";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <section className="Producto">
      <Link to={`/product/${product.id}`}>
        <div className="img-producto">
          <img
            src={`${product.img}`}
            alt={`Imagen de ${product.title}`}
          />
        </div>
        <div className="infoProducto">
          <h2 className="titleProduc">{product.title}</h2>
          <p className="precio">${product.price}</p>
          <strong className="envio">Envío gratis</strong>
          <p className="stock">Stock: {product.stock}</p>
          <strong className="verMas">Ver mas...</strong>
        </div>
      </Link>
    </section>
  );
};
