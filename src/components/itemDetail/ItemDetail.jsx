/* eslint-disable react/prop-types */
import "./itemDetail.scss";
import { Link } from "react-router-dom";
import { useCounter } from "../../hooks/useCounter";
import { useCarritoContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import {
  ocultarDescripcion,
  ocultarCuidados,
  ocultarValoraciones,
} from "./Ocultar";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCarritoContext();
  const { count, increment, decrement } = useCounter(1, item.stock, 1);

  const handleAddToCart = () => {
    addItem(item, count);
    toast.success(`Su producto ha sido agregado al carrito`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const formattedPrice = (price) => {
    return price.toLocaleString('es-ES');
  }


  return (
    <>
      <div className="imagen">
        <img
          className="imgDetalleProduc"
          src={`${item.img}`}
          alt={`Imagen de ${item.title}`}
        />
      </div>
      <div className="contenedorInfo">
        <div className="homeItem">
          <Link to={"/"}>
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
          </Link>
        </div>
        <strong className="categoria">{item.category}</strong>
        <p className="nombreProd">{item.title}</p>
        <strong className="precioProduc">$ {formattedPrice(item.price)}</strong>

        <div className="botonesProduc">
          <button className="btnItemProduc" onClick={ocultarDescripcion}>
            Descripción
          </button>
          <button className="btnItemProduc" onClick={ocultarCuidados}>
            Detalles
          </button>
          <button className="btnItemProduc" onClick={ocultarValoraciones}>
            Valoración
          </button>
          <hr className="lineaItem" />
          <p className="descripsionProduc">{item.description}</p>
          <ul className="cuidados">
            {item.detalle &&
              Object.entries(item.detalle[0]).map(([key, value]) => (
                <li key={key} className="liItem">
                  <strong className="cuidadosLi">{key}: </strong>
                  {value}
                </li>
              ))}
          </ul>
          <p className="valoracion">{item.valoracion}</p>
        </div>
        <div className="stock">
          <div className="cantidad">
            <div className="btnConunt">
              <p className="cantidadItem">Cantidad</p>
              <button className="modificar" onClick={decrement}>
                -
              </button>
              <span className="count">{count}</span>
              <button className="modificar" onClick={increment}>
                +
              </button>
            </div>
            <div className="total">
              <strong>Total Precio</strong>
              <p className="numero">$ {formattedPrice(item.price * count)}</p>
            </div>
          </div>
        </div>
        <button className="comprarItem" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
