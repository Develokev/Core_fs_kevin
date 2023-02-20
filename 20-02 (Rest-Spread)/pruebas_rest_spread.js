// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
// EJERCICIO 1
function sumEveryOther(...rest) {
    let total = 0;
  
    for (let i = 0; i < rest.length; i++) {
      total += rest[i];
    }
    console.log(total)
    return total;
  }
  
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

// EJERCICIO 2
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function xyz(x, y, ...z) {
//     console.log(x, " ", y); // hey hello
  
//     console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
//     console.log(z[0]); // wassup
//     console.log(z.length); // 4
//   }
  
//   xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy");

//   function addOnlyNums(x, y, ...rest) {
//     // let suma = Math.min(parseFloat(x, rest));
//     // console.log(suma); // hey hello
//         let suma = parseFloat(x + rest);
//         console.log(suma);
//         return suma;
//       }
  
//   addOnlyNums(1, "perro", 2, 4);

// EJERCICIO 3
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function countTheArgs (...rest) {
    console.log(rest.length);
}

countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4