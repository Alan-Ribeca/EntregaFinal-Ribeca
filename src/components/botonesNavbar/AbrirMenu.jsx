export const abrir = () => {
    const abrir = document.querySelector(".abrir")
    const cerrar = document.querySelector(".movil")

    abrir.style.display = "none"
    cerrar.classList = ""
    cerrar.classList.add("prueba")
}


export const cerrar = () => {
    const cerrar = document.querySelector(".prueba")
    const abrir = document.querySelector(".abrir")

    cerrar.classList = ""
    cerrar.classList.add("movil")
    abrir.style.display = "block"
}