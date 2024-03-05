import "./cart.scss";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";
import { ItemList } from "../itemList/ItemLis";
import { ItemCart } from "../itemCart/ItemCart";

export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();

  return (
    <>
      {carrito.length === 0 ? (
        <>
          <div className="vacio">
            <h1 className="cartVacio">carrito vacio</h1>
            <Link to="/">
              <button className="btnInicio">Ver productos...</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <section className="cart">
            <div className="itemProductos">
              {<ItemList products={carrito} plantilla={ItemCart} />}
            </div>
            <div className="resumenCompra">
              <h1>Resumen de compra</h1>
              <hr className="hrCarrito" />
              <p className="envio">
                Envio <strong className="gratis">Gratis</strong>
              </p>
              <p>
                Total <strong className="totalPrice">$ {totalPrice()}</strong>
              </p>
              <div className="botonResumen">
                <button onClick={emptyCart} className="vaciarCarrito">
                  Vaciar carrito
                </button>
                <Link to={"/"}>
                  <button className="seguirComprando">Seguir comprando</button>
                </Link>
              </div>
              <Link to={"/checkout"}>
                <button className="finalizarCompra">Finalizar compra</button>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};
