/*
Nombre completo: Mamaní Elías Braulio
DNI: 43633913
Nota: Usé quokka para ver los msjs de consola

1) Escribir un programa que sea capaz de recibir una lista de alumnos, luego ordenarlos alfabéticamente y finalmente mostrar la lista en pantalla con el mensaje: Hola: mis alumnos son:.
Nota: No se vale ordenar los alumnos de forma manual, el programa al ejecutarlo debe ser capaz de mostrarlos ordenados aunque no lo estén.

Ejemplo:
let arreglo = ["María", "Juan", "Adrián", "José"];
el programa lo mostrará de la siguiente forma:
'Adrián', 'José', 'Juan', 'María' ]*/

let alumnos = ["María", "Juan", "Adrián", "José"];

const ordenados = alumnos.sort();
console.log("Hola: mis alumnos son: " + ordenados.join(', '));


/*
2) Investigar sobre las condicionales en la programación y si es posible, proporcionar ejemplos en un comentario multilínea en su archivo.*/

// Conozco cuatro tipos de condicionales, 'if', 'if-else', 'if-else if-else' y 'switch'
// -> 'if': evalua si una condicion es verdadera, solo así ejecuta el bloque
// -> 'if-else': si 'if': es falso ejecuta 'else'
// -> 'if-else if-else': evalua 'if' si no es verdadera se evaluan los 'else if' y
// si ninguna termina siendo verdadera se ejecuta 'else' 
// -> 'switch': compara multiples casos y ejecuta el bloquede de codigo correspondiente
// si no hay concidencias, ejecuta el bloque 'default' si esta presente

let años = 18;

// Ejemplo de if
if (años >= 18) {
    console.log("Eres mayor de edad");
}

// Ejemplo de if-else
if (años < 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
} 

// Ejemplo de if-else if-else
let puntos = 85;

if (puntos >= 90) {
    console.log("Tienes una A");
} else if (puntos >= 80) {
    console.log("Tienes una B");
} else if (puntos >= 70) {
    console.log("Tienes una C");
} else if (puntos >= 60) {
    console.log("Tienes una D");
} else {
    console.log("Tienes una F");
}

// Ejemplo de switch
let fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana");
        break;
    case "banana":
        console.log("Es una banana");
        break;
    case "naranja":
        console.log("Es una naranja");
        break;
    default:
        console.log("Fruta desconocida");
        break;
}

/*
3) Escribir un programa que sea capaz de mostrar en pantalla si un número, el que ustedes quieran,
es mayor a otro, el resto de una división y un número elevado a una potencia que ustedes quieran.

Ejemplo:
utilizarán el operador correspondiente y la consola mostrará true o false dependiendo el resultado.
Si el 4 es mayor que el 3 mostrará true, o si el 5 es menor al 4 mostrará false.*/

let num1 = 4;
let num2 = 3;

// Número mayor a otro
let esMayor = num1 > num2;
console.log(esMayor);
// Uso el operador resto
let resto = num1 % num2;
console.log(resto);
// Potencia de dos números
let potencia = Math.pow(num1, num2);
console.log(potencia);