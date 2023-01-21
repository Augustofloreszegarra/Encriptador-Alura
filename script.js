document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    //...
 });

const input = document.getElementById("input");
const imagenBusqueda = document.getElementById("imagen-busqueda");
const sinTexto = document.getElementById("sin-texto");
const output = document.createElement("textarea");

input.addEventListener("input", function() {
  if (this.value.length > 0) {
    imagenBusqueda.style.display = "none";
    sinTexto.style.display = "none";
    output.style.display = "block";
    output.setAttribute("id","output")
    document.getElementsByClassName("main-right")[0].appendChild(output);
  } else {
    imagenBusqueda.style.display = "block";
    sinTexto.style.display = "block";
    output.style.display = "none";
    output.remove();
  }
});