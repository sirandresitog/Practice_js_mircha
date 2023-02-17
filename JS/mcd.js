// Funcion que clacula el MCD
function MCD() {
  if (arguments.length < 2) return false;
  if (arguments.length == 2)
    return arguments[1] == 0
      ? arguments[0]
      : MCD(arguments[1], arguments[0] % arguments[1]);
  var arr = [].splice.call(arguments, 0);
  arr.splice(0, 2, MCD(arr[0], arr[1]));
  return MCD.apply(window, arr);
}

// Funcion que calcula el mcm
function mcm(a, b) {
  if (arguments.length < 2) return false;
  if (arguments.length == 2)
    return (arguments[0] * arguments[1]) / MCD(arguments[0], arguments[1]);
  var arr = [].splice.call(arguments, 0);
  arr.splice(0, 2, mcm(arr[0], arr[1]));
  return mcm.apply(window, arr);
}

// La siguiente función recoge el valor de 'input'
// extrae los números y descarta las comas,
// convierte los números en enteros
// y los inserta en un array
function calcularMCDmcm() {
  var input = document.getElementById("dataInput").value;
  var numbers = []; // array que almacenará nuestros números
  var idx = 0; // indicador para usar como 'start position' del metodo substring

  // el siguiente bucle recorre cada caracter de nuestro string
  for (var i = 0; i < input.length; i++) {
    if (input[i] == ",") {
      // verificamos si es una coma (,)
      numbers.push(parseInt(input.substring(idx, i))); // extraemos el número y lo agregamos al array
      idx = i + 1; // marcamos el nuevo 'start-position'
    } else if (i == input.length - 1) {
      // si llegamos al final de la cadena
      numbers.push(parseInt(input.substring(idx))); // extraemos el último numero y lo agregamos al array
    }
  }

  // ahora ya podemos usar el método 'apply' con nuestras funciones MCD y mcm
  document.getElementById("MCD").innerText =
    "El MCD es: " + MCD.apply(window, numbers);
  document.getElementById("mcm").innerText =
    "El mcm es: " + mcm.apply(window, numbers);

  // también lo puedes usar en la cónsola.
  console.log("MCD:", MCD.apply(window, numbers));
  console.log("mcm: ", mcm.apply(window, numbers));
}
