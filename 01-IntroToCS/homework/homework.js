"use strict";

// // //? AND

// //   A    B   AND

// //   1    1    1
// //   1    0    0
// //   0    1    0
// //   0    0    0

// //   //? OR

// //   A    B   OR

// //   1    1    1
// //   1    0    1
// //   0    1    1
// //   0    0    0

// //   // XOR  ===>> EXCLUSIVELY - OR

// // A    B    XOR

// //   1    1   0
// //   1    0   1
// //   0    1   1
// //   0    0   0

// //   A    B   SUM(XOR)  CARRY(AND)

// //   0    0      0         0
// //   1    0      1         0
// //   0    1      1         0
// //   1    1      0         1

// //? OR

// console.log(3 || "orange");
// console.log("" || "Orange");
// console.log(true || 0);
// console.log(undefined || null);

// //? AND

// console.log(0 && "Orange"); //false
// console.log("" && "Orange");
// console.log(true && null);
// console.log("Apple" && "Orange");

// //! Ejemplo de uso de operadores para toma de decisiones

// // function imprimeDos(a){
// //   if(a=== 2)console.log("esDos");
// // }

// // function imprimeDos(a) {
// //   a === 2 && console.log("esDos");
// // }

// // imprimeDos(2);

// function imprimeDos(a) {
//   if (a !== 2) console.log("no es Dos");
// }
// imprimeDos(2);

// // !A  A = true  ==> false
// // !A  A  = false  ===> true

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
  var resultado = 0;
  var indice = num.length -1;
  for(let i = 0; i < num.length; i++){
    resultado = resultado + num[i] * 2 ** indice;
    console.log("num", num[i], "i", i, "indice: ", indice);
    indice--;
  }
  return resultado;
}

BinarioADecimal(2);

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  var resultado = "";
  if(num === 0) return 0;
  while(num > 0){
    var resto = num % 2;
    resultado = resto + resultado;
    num = Math.floor(num / 2);
  }
  // return resultado;
  // var semTotal = [];
  //  var resi = num;
  //  while (resi>0) {
  //     semTotal.unshift(resi % 2);
  //     resi = Math.floor(resi / 2);
      
  //     if(resi<2){
  //        semTotal.unshift(resi);
  //     }
  //  }
  //  return semTotal.join('');
}
DecimalABinario(0);
module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
