// 1. Usando la función filter en una sola línea coloca en un array las palabras que contienen "t" y/o "a" y están en posiciones impares.
// array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]

const arrayPalabras = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]
console.log(arrayPalabras);

const resultado = arrayPalabras.filter(operacion, [i], arrayPalabras.length > [i]);
console.log(resultado);

palabras.push(resultado)

function operacion () {
    for (let i = 1; i <= 8; i++) {
        if (i == "t" || i == "a" || i%2 != 0) {
}   return
}
}

const ARRAY = [1, 2, 3, 4, 5, 6]
const nuevoARRAY = ARRAY.filter(operacion(i&2 == 0));
console.log(nuevoARRAY);


// var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])