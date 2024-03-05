export const validar = (data) => {
  const errores = {};

  if (!data.nombre || data.nombre.trim() === "") {
    errores.nombre = "El nombre es requerido";
  }

  if (!data.dni || data.dni.length < 8 || data.dni.length > 13) {
    errores.dni = "El DNI debe tener entre 8 y 13 caracteres";
  }

  if (!data.email || !validarEmail(data.email)) {
    errores.email = "El email es inválido";
  }

  if (!data.telefono || data.telefono.length < 9 || data.telefono.length > 11) {
    errores.telefono = "El teléfono debe tener entre 9 y 11 caracteres";
  }

  if (!data.direccion || data.direccion.trim() === "") {
    errores.direccion = "La dirección es requerida";
  }

  return errores;
};

const validarEmail = (email) => {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return regex.test(email);
};
