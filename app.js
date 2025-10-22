const titulo = document.querySelector('h1');

function consola() {
  console.log("¡Hola, mundo!");
}

function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

function alerta() {
  alert("Este es un mensaje de JavaScript");
}

function ingresar() {
  let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Colombia:");
  alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function obtenerValores() {
  const num1 = parseFloat(document.getElementById('numero1').value) || 0;
  const num2 = parseFloat(document.getElementById('numero2').value) || 0;
  return { num1, num2 };
}

function mostrarResultado(valor, texto) {
  document.getElementById('resultado').value = valor;
  titulo.textContent = `Calculadora Jose Mayo — ${texto}`;
}


let ultimoInput = null;

document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('focus', () => ultimoInput = input.id);
});

function agregarNumero(num) {
  if (!ultimoInput) ultimoInput = 'numero1'; // Por defecto
  const input = document.getElementById(ultimoInput);
  input.value += num;
}



function sumarNumeros() {
  const { num1, num2 } = obtenerValores();
  mostrarResultado(num1 + num2, "La suma es:");
}

function resta() {
  const { num1, num2 } = obtenerValores();
  mostrarResultado(num1 - num2, "La resta es:");
}

function multiplicar() {
  const { num1, num2 } = obtenerValores();
  mostrarResultado(num1 * num2, "La multiplicación es:");
}

function division() {
  const { num1, num2 } = obtenerValores();
  if (num2 === 0) {
    alert("No se puede dividir entre cero");
    return;
  }
  mostrarResultado(num1 / num2, "La división es:");
}

function raiz() {
  const { num1 } = obtenerValores();
  mostrarResultado(Math.sqrt(num1), "La raíz cuadrada es:");
}

function seno() {
  const { num1 } = obtenerValores();
  mostrarResultado(Math.sin(num1).toFixed(4), "El seno es:");
}

function coseno() {
  const { num1 } = obtenerValores();
  mostrarResultado(Math.cos(num1).toFixed(4), "El coseno es:");
}

function tangente() {
  const { num1 } = obtenerValores();
  mostrarResultado(Math.tan(num1).toFixed(4), "La tangente es:");
}

function log10() {
  const { num1 } = obtenerValores();
  mostrarResultado(Math.log10(num1).toFixed(4), "El logaritmo base 10 es:");
}

function borrar() {
  document.getElementById('numero1').value = '';
  document.getElementById('numero2').value = '';
  document.getElementById('resultado').value = '';
  titulo.textContent = 'Calculadora  2025';
}
