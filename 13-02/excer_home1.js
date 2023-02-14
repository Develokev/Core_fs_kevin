// <!-- se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
// 	1º Cuantos son positivos
//     2º Cuantos son negativos
//     3º Cuantos son pares -->

const positivos= document.getElementById('positivos')
        const negativos= document.getElementById('negativos')
        const pares= document.getElementById('pares')

        let notas = [];
        let contpos = 0;
        let contneg = 0;
        let contpar = 0;
        let totalNums = 10;

        function solicitarNumeros() { //
            for (let i = 0; i <= totalNums; i++) {
                let nota = parseInt(prompt(`Escribe el número ${i + 1}:`));
                notas.push(validar(nota))
            }
        };
        function validar(valor = 'g') {
            while (isNaN(valor)) {
                valor = parseInt(prompt(`Número no válido, vuelve a escribir el número`));
            }
            operar(valor)
            return valor
        }
        // function operar() {
        //     for (let i = 0; i <totalNums; i++) {
        //         if (notas[i] % 2 == 0) {
        //             contpar++;
        //         }
        //         if (notas[i] > 0) {
        //             contpos++;
        //         } else if (notas[i] < 0) {
        //             contneg++;
        //         }
        //     }
        // }
        // function operar() {
        //     let i=0
        //     while(i<notas.length){
        //         if (notas[i] % 2 == 0) {
        //             contpar++;
        //         }
        //         if (notas[i] > 0) {
        //             contpos++;
        //         } else if (notas[i] < 0) {
        //             contneg++;
        //         }
        //         i++
        //     }
        // }
        function operar(valor) {
            if (valor % 2 == 0) {
                contpar++;
            }
            if (valor > 0) {
                contpos++;
            } else if (valor < 0) {
                contneg++;
            }
        }
        function escribir() {
            positivos.innerText = contpos + ' número/s positivo/s';
            negativos.innerText = contneg + ' número/s negativo/s';
            pares.innerText = contpar + ' número/s par/es'
        };
        function ejer1() {
            solicitarNumeros()
            escribir()
        }

// Ejercicio 2

// – Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
// 	1º Almacenar todos los números en un array
//                        2º Almacenar en otro array los números comprendidos entre el 1 y 250
// 3º Almacenar en otro array los números comprendidos entre el 251 y 500

let nums = [];
let num250 = [];
let num500 = [];
function solicitarNum() {
    while (nums.length < 10) {
        let n = parseFloat(prompt("introduce diez números entre el 1 y el 500"));
        if (n < 0) {
            alert("el numero es menor que 1, introduce otro entre el 1 y el 500");
        } else {
            if (n > 500) {
                alert("el numero es mayor que 500, introduce otro entre el 1 y el 500");
            } else {
                if (n > 1 && n <= 500) {
                    console.log(n + "cumple la condicion");
                    nums.push(n);
                    console.log(nums);
                }else{
                    alert("el valor introducido no es valido");
                }
            }
        }
    }
}
function organizarNum() {
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n < 250) {
            num250.push(n);
        } else {
            num500.push(n);
        }
    }
alert("numeros introducidos por encima de 250 : "+num250+"\n numeros introducidos entre 250 y 500 : "+num500);
}
solicitarNum();
organizarNum();