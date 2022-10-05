const vaciar = () => {
  document.getElementById("pantalla").value = "";
}

const cuadrado = () => {
  if (validar()) {
    let num = document.getElementById("pantalla");
    num.value = num.value * num.value;
    rellenar_info();
  }
}
const mod = () => {
  if (validar()) {
    let num = document.getElementById("pantalla");
    if (num.value < 0) {
      num.value = 0 - num.value;
    } else {
      num.value = num.value;
    }
    rellenar_info();
  }
}

const fact = () => {
  if (validar()) {
    let num = document.getElementById("pantalla");
    for (let i = num.value - 1; i > 0; i--) {
      let aux = 1;
      aux *= i;
      num.value = num.value * aux;
    }
    rellenar_info();
  }
}

let operador = "";
let total = 0;

const guardaInput = (numInput) => {
  switch (operador) {
    case "multiplicador":
      total *= numInput;
      break;
    case "":
      total = numInput;
      break;
    case "sumador":
      total += numInput;
      break;
    default:
      break;
  }
  rellenar_info();
}

const mul = () => {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    total = document.getElementById("pantalla").value;
    operador = "multiplicador";
    vaciar();
    rellenar_info();
  }
}

const add = () => {
  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    //total = document.getElementById("pantalla").value;
    operador = "sumador";
    vaciar();
    rellenar_info();
  }
}

const eq = () => {

  if (validar()) {
    guardaInput(Number(document.getElementById("pantalla").value));
    operador = "";
    document.getElementById("pantalla").value = total;
    rellenar_info();
  }
}

const sumatorio = () => {
  if (validar()) {
    let num = document.getElementById("pantalla");
    let listilla = num.value.split(",");
    let i = 0;
    let suma = 0;
    while (i < listilla.length) {
      suma += +listilla[i];
      i++;
    }
    num.value = suma;
    rellenar_info();
  }
}

const sortNumbers = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}
const ordenar = () => {
  if (validar()) {
    let listaString = document.getElementById("pantalla").value;
    let arrayNumeros = listaString.split(",");
    document.getElementById("pantalla").value = arrayNumeros.sort(sortNumbers);
    rellenar_info();
  }
}

const revertir = () => {
  if (validar()) {
    let listaString = document.getElementById("pantalla").value;
    let arrayNumeros = listaString.split(",");
    document.getElementById("pantalla").value = arrayNumeros.reverse();
    rellenar_info();
  }
}
const quitar = () => {
  if (validar()) {
    let listaString = document.getElementById("pantalla").value;
    let arrayNumeros = listaString.split(",");
    arrayNumeros.pop();
    document.getElementById("pantalla").value = arrayNumeros;
    rellenar_info();
  }
}

const rellenar_info = () => {
  if (Number(document.getElementById("pantalla").value) < 100) {
    document.getElementById("info").innerHTML = "Info: El resultado es menor que 100";
  } else if (Number(document.getElementById("pantalla").value) > 200) {
    document.getElementById("info").innerHTML = "Info: El resultado es superior a 200";
  } else {
    document.getElementById("info").innerHTML = "Info: El resultado está entre 100 y 200";
  }
}

const validar = () => {
  let listaString = document.getElementById("pantalla").value;
  let arrayNumeros = listaString.split(",");
  for (let i = 0; i < arrayNumeros.length; i++) {
    let element = Number(arrayNumeros[i]);
    if (Number.isNaN(element)) {
      document.getElementById("pantalla").value = "Error";
      return false;
    }
  }
  return true;
}