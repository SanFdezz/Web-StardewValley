var estiloActual = 1;

function cambiarEstilo() {
  var tipoFondo = document.getElementById("estiloActual");
  
  if (estiloActual === 1) {
    tipoFondo.href = "modoOscuro.css";
    estiloActual = 2;
  } else {
    tipoFondo.href = "modoClaro.css";
    estiloActual = 1;
  }
}