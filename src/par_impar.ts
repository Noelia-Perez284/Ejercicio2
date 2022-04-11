let btnEnviar = document.getElementById("btnEnviar");
let inputNumero = <HTMLInputElement>document.getElementById("Numero");
let numeroParImpar = document.getElementById("numero ParImpar");

btnEnviar.addEventListener("click", () => {
  let numero = Number(inputNumero.value);
  let resto = numero % 2;
  if (numero === 0) {
    numeroParImpar.innerHTML = " El numero ingresado es Cero";
    console.log("El numero ingresado es Cero");
  } else if (resto === 0) {
    numeroParImpar.innerHTML = numero + " es par";
    console.log(numero + " es par");
  } else {
    numeroParImpar.innerHTML = numero + " es imar";
    console.log(numero + "es impar");
  }
});
