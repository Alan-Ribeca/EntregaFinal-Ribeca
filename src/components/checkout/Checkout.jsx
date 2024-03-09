/* eslint-disable no-unused-vars */
import "./checkout.scss";
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react";
import { validar } from "./validar";
import { useCarritoContext } from "../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import {
  createOrdenCompra,
  getOrdenCompra,
  getProduct,
  updateProduct,
} from "../../firebase/firebase";


export const Checkout = () => {
  const formRef = useRef();
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();
  const { carrito, totalPrice, emptyCart } = useCarritoContext();
  const [formulario, setFormulario] = useState({
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validar({ [name]: value });
    setErrores((prevErrores) => ({
      ...prevErrores,
      [name]: error[name],
    }));
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validar({ [name]: value });
    setErrores((prevErrores) => ({
      ...prevErrores,
      [name]: error[name],
    }));
  };

  const todosCamposLlenos = () => {
    return Object.values(formulario).every((value) => value.trim() !== "");
  };

  const enviar = (e) => {
    const datForm = new FormData(formRef.current);
    const cliente = Object.fromEntries(datForm);

    e.preventDefault();

    const aux = [...carrito];

    aux.forEach((prodCarrito) => {
      getProduct(prodCarrito.id).then((prodBDD) => {
        if (prodBDD.stock >= prodCarrito.quantity) {
          prodBDD.stock -= prodCarrito.quantity;
          updateProduct(prodBDD.id, prodBDD);
        } else {
          toast.info(
            `El producto ${prodBDD.title} no puede continuar con la compra ya que no posee stock suficiente`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          aux.filter((prod) => prod.id != prodBDD.id); 
        }
      });
    });

    const formulario = document.querySelector(".compra");
    const texto = document.createElement("P");
    texto.textContent = "¡Felicitaciones por su compra!";
    texto.className = "formularioEnviado";
    formulario.appendChild(texto);

    const aux2 = aux.map((prod) => ({
      id: prod.id,
      quantity: prod.quantity,
      price: prod.price,
    }));

    createOrdenCompra(
      cliente,
      totalPrice(),
      aux2,
      new Date().toLocaleDateString("es-AR"),
      { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }
    ).then((ordenCompra) => {
      toast
        .success(
          `🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${
            ordenCompra.id
          } por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        )
        .catch((e) => {
          toast.error(`Error al generar orden de compra: ${e}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    });

    setTimeout(() => {
      e.target.reset();
      setFormulario({
        nombre: "",
        dni: "",
        email: "",
        telefono: "",
        direccion: "",
      });

      texto.remove();
      setErrores({});

      window.location.replace("/");
    }, 6000);
  };

  return (
    <>
      <section className="formCompra">
        <div className="info">
          <h1 className="tituloCompra">¡Pasos para finalizar la compra!</h1>
          <p className="pasos">Paso 1: Completa el formulario con tus datos</p>
          <p className="pasos">
            Paso 2: Una vez completado presiona el botón Finalizar Compra
          </p>
          <p className="pasos">
            Paso 3: Si todos los datos son correctos se te enviará un correo con
            la información del envío en tiempo real
          </p>
        </div>
        <form action="" ref={formRef} onSubmit={enviar} className="compra">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.nombre && <p className="error">{errores.nombre}</p>}
          <label>DNI:</label>
          <input
            type="number"
            name="dni"
            placeholder="DNI"
            id="dni"
            value={formulario.dni}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.dni && <p className="error">{errores.dni}</p>}
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={formulario.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.email && <p className="error">{errores.email}</p>}
          <label>Teléfono:</label>
          <input
            type="number"
            name="telefono"
            placeholder="Teléfono"
            id="telefono"
            value={formulario.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.telefono && <p className="error">{errores.telefono}</p>}
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            id="direccion"
            value={formulario.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errores.direccion && <p className="error">{errores.direccion}</p>}
          <button
            type="submit"
            className="finalizarCompra"
            disabled={!todosCamposLlenos()}
          >
            Finalizar Compra
          </button>
        </form>
      </section>
    </>
  );
};
