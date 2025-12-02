// reduce()
// Ejemplo: Calcular el promedio de calificaiónes 

const calificaciones = [4.5, 3.2, 5.0, 4.0, 3.8]

const promedio = calificaciones.reduce(( acc, nota) => acc + nota, 0) / calificaciones.length

console.log(promedio)


// every()
// Ejemplo 1: Verificar que todos sean mayores de 18

const edades = [ 22, 30, 19, 25 ]

const todosMayores = edades.every(edad => edad >= 18 )

console.log( todosMayores)


// Ejemplo 2: Verificar que todas las palabras tengan más de 3 letras

const palabra = ["perro", "celular", "sol", "casa", "mesa"]

const largoPalabras = palabra.every(palabra => palabra.length > 3)

console.log(largoPalabras)


// includes()
const frutas = [
    {
        id: 1,
        producto: "manzana",
        cod: "234b2",
        cant: 5
    }
    , "manzana", "uva", "platano"]
    frutas.forEach(frut => {

    })