import "./checkout.scss";
import { useRef, useState } from "react";
import { validar } from "./validar";

export const Checkout = () => {
  const formRef = useRef();
  const [errores, setErrores] = useState({});
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
    const data = Object.fromEntries(datForm);
    console.log(data);
    e.preventDefault()

    const formulario = document.querySelector(".compra")
    const texto = document.createElement("P")
    texto.textContent = "¡Felicitaciones por su compra!"
    texto.className = "formularioEnviado"
    formulario.appendChild(texto)

    setTimeout( () => {
      e.target.reset()
      setFormulario({
        nombre: "",
        dni: "",
        email: "",
        telefono: "",
        direccion: "",
      });

      texto.remove()
      setErrores({});

      window.location.replace("/")
    }, 2000)

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
