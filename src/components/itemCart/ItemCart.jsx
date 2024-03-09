/* eslint-disable react/prop-types */
import "./itemCart.scss";
import { useCarritoContext } from "../../context/CartContext";
import { useCounter } from "../../hooks/useCounter";
import { Link } from "react-router-dom";

export const ItemCart = ({ product }) => {
  const { removeItem } = useCarritoContext();
  const { count, increment, decrement } = useCounter(
    product.quantity,
    product.stock,
    1
  );

  return (
    <section className="itemCart">
      <div className="infoProduc">
        <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
        <p className="description">{product.description}</p>
        <div className="cantidad">
          <button className="modificar" onClick={decrement}>
            -
          </button>
          <span className="cantidadProduc">{count}</span>
          <button className="modificar" onClick={increment}>
            +
          </button>
          <p className="totalPrice">Precio ${product.price * count}</p>
        </div>
        <button className="eliminar" onClick={() => removeItem(product.id)}>
          Eliminar
        </button>
        <Link to="/checkout">
          <button className="comprarIndivual">Comprar ahora</button>
        </Link>
      </div>
    </section>
  );
};
