// HOMEWORK - JAVASCRIPT AVANZADO I

// SCOPE & HOISTING
// Determiná que será impreso en la consola, sin ejecutar el código.

// Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

// Ejercicio 1
// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x);
//    console.log(a);
//    var f = function (a, b, c) {
//       b = a;
//       console.log(b);
//       b = c;
//       var x = 5;
//    };
//    f(a, b, c);
//    console.log(b);
// };
// c(8, 9, 10);
// console.log(b);
// console.log(x);

// Ejercicio 2
// var bar; // DECLARAR
// console.log(bar);
// console.log(baz); // <---
// foo();
// function foo() {
//    console.log('Hola!');
// }
// bar = 1; // INICIALIZAR
// baz = 2;

// Ejercicio 3
// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor);

// var => scope de FUNCION
// let => scope de BLOQUE --> { }
// var a = 1;
// var a = 2; // var permite re-declarar una variable
// var a = 3; // var permite re-declarar una variable

// let b = 1;
// let b = 2;

// Ejercicio 4
// var instructor = 'Tony';
// console.log(instructor);
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor);
//    }
// })();
// console.log(instructor);

// Ejercicio 5
// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor);
//    console.log(pm);
// }
// console.log(instructor);
// console.log(pm);

// COERCIÓN DE DATOS ----- -----
// ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// {}[0]
// parseInt("09")
// 5 && 2
// 2 && 5
// 5 || 0
// 0 || 5
// [3]+[3]-[10]
// 3>2>1
// [] == ![]

// console.log([] === ![]);
//          [] == false
//          [] == 0
//          "" == 0
//           0 == 0 => true

// VALORES FALSY = 0, "", null, undefined, false
// VALORES TRUTHY = El resto

// Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

// HOISTING ----- -----
// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

// function test() {
//    console.log(a);
//    console.log(foo());

//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test();

//Y el de este código? :
// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }
//    return snack;
// }

// console.log(getFood(false));

// THIS ----- -----
// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

// fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname; // function () { return this.fullname }

// console.log(test());
// console.log(this);

// EVENT LOOP ----- -----
//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();