const textoAEncriptar = document.getElementById("text-area");
const iconoP = document.getElementById("icono-p");
const iconoSvg = document.getElementById("icono-svg");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const textoEncriptado = document.getElementById("texto-encriptado");
const btnCopiar = document.getElementById("btn-copiar");
const imagenBusqueda = document.getElementById("imagen-busqueda");
const sinTexto = document.getElementById("sin-texto");
const svg = document.getElementById("svg");
const elementosOcultar = document.querySelectorAll("#btnCopiar, #textoEncriptado");
const elementosMostrar = document.querySelectorAll("#imagen-busqueda, #sin-texto");

function ocultarMostrarElementos(elementosOcultar, elementosMostrar) {
  elementosOcultar.forEach(elemento => elemento.style.display = "none");
  elementosMostrar.forEach(elemento => elemento.style.display = "block");
}

textoAEncriptar.addEventListener("input", function() { // agregando un evento "input" al elemento con id "text-area". El evento "input" se activa cada vez que el usuario escribe o pega algo en el textarea.
  let texto = textoAEncriptar.value;
  let expresionRegular1 = /[\u0300-\u036f]/g; //Esta expresión regular buscará cualquier caracter que sea un acento
  let expresionRegular2 = /[^a-z0-9.,?\n ]/g; //Esta expresión regular buscará cualquier caracter que sea una letra distinta a [^a-z0-9.,?]
  let resultado1 = texto.match(expresionRegular1); 
  let resultado2 = texto.match(expresionRegular2);
  
  if (resultado1 || resultado2) {
    iconoP.style.color = "red";
    iconoSvg.style.stroke = "red";
    btnEncriptar.disabled = true;
    btnDesencriptar.disabled = true;
  } else {
    iconoP.style.color = "#495057";
    iconoSvg.style.stroke = "#495057";
    btnEncriptar.disabled = false;
    btnDesencriptar.disabled = false;
  }

  if (texto.trim() == "") {
    ocultarMostrarElementos([btnCopiar, textoEncriptado], [imagenBusqueda, sinTexto]);
  }

});

function limpiar () {
  textoAEncriptar.value = "";
  iconoP.style.color = "#495057";
  iconoSvg.style.stroke = "#495057";
  ocultarMostrarElementos([btnCopiar, textoEncriptado], [imagenBusqueda, sinTexto]);
  textoAEncriptar.focus();
}
  
svg.addEventListener("click",limpiar)

btnEncriptar.addEventListener("click", function(){ 
  let texto = textoAEncriptar.value;

  if (texto != "") {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    textoEncriptado.value = texto;
    imagenBusqueda.style.display = "none";
    sinTexto.style.display = "none";
    btnCopiar.style.display = "block";
    textoEncriptado.style.display = "block";
  }
});

btnDesencriptar.addEventListener("click", function(){
  let texto = textoAEncriptar.value;

  if (texto != "") {
    texto = texto.replace(/enter/g, "e")
    texto = texto.replace(/imes/g, "i")
    texto = texto.replace(/ai/g, "a")
    texto = texto.replace(/ober/g, "o")
    texto = texto.replace(/ufat/g, "u");
    textoEncriptado.value = texto;
    imagenBusqueda.style.display = "none";
    sinTexto.style.display = "none";
    btnCopiar.style.display = "block";
    textoEncriptado.style.display = "block";
  }
});
btnCopiar.addEventListener("click", function(){
  textoEncriptado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles!");
});