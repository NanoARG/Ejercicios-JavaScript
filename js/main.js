// Se solicita los datos al usuario

const nombre = prompt("Ingrese su nombre aquí:")
const anio = parseInt(prompt("Ingrese el año en que nació"))

// Se crea la variable para calcular la edad del usuario
const edad = 2026 - anio

// Se muestra por consola la edad del usuario
console.log("Su edad es " + edad)

// Se muestra mediante ventana emergente la edad del usuario
alert("Su edad es " + edad)