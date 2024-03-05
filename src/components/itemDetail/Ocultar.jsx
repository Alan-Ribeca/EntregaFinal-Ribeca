export const ocultarDescripcion = () => {
  const descripcion = document.querySelector(".descripsionProduc");
  const cuidados = document.querySelector(".cuidados");
  const valoraciones = document.querySelector(".valoracion");
  descripcion.style.display = "block";
  cuidados.style.display = "none";
  valoraciones.style.display = "none";
};

export const ocultarCuidados = () => {
  const descripcion = document.querySelector(".descripsionProduc");
  const cuidados = document.querySelector(".cuidados");
  const valoraciones = document.querySelector(".valoracion");
  cuidados.style.display = "block";
  descripcion.style.display = "none";
  valoraciones.style.display = "none";
};

export const ocultarValoraciones = () => {
  const descripcion = document.querySelector(".descripsionProduc");
  const cuidados = document.querySelector(".cuidados");
  const valoraciones = document.querySelector(".valoracion");
  cuidados.style.display = "none";
  descripcion.style.display = "none";
  valoraciones.style.display = "block";
};
