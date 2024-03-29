/* eslint-disable react/prop-types */
import "./itemCart.scss";
import { useCarritoContext } from "../../context/CartContext";
import { useCounter } from "../../hooks/useCounter";
import { Link } from "react-router-dom";

export const ItemCart = ({ product }) => {
  const { removeItem, updateTotalPrice } = useCarritoContext();
  const { count, increment, decrement } = useCounter(
    product.quantity,
    product.stock,
    1
  );

  const handleIncrement = () => {
    if (count < product.stock) {
      increment();
      updateTotalPrice(product.id, count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      decrement();
      updateTotalPrice(product.id, count - 1);
    }
  };

  const formattedPrice = (price) => {
    return price.toLocaleString('es-ES');
  }

  return (
    <section className="itemCart">
      <div className="infoProduc">
        <Link to={`/product/${product.id}`}>
          <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
        </Link>
        <p className="description">{product.description}</p>
        <div className="cantidad">
          <button className="modificar" onClick={handleDecrement}>
            -
          </button>
          <span className="cantidadProduc">{count}</span>
          <button className="modificar" onClick={handleIncrement}>
            +
          </button>
          <p className="totalPrice">Precio ${formattedPrice(product.price * count)}</p>
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
