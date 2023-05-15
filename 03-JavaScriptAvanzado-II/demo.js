// Closures

// function contenedor(){
//     var caja = []; // La función padre guarda la variable caja para que la hija la use cuando se lo pidan.
//     return function(item){
//         caja.push(item);
//         return caja;
//     }
// }
// var miContenedor = contenedor();

// console.log(miContenedor("Libro "));

// ! CLOSURE
// Es una función que retorna una función. Sin esto no hay closure
// La función hija tiene que utilizar una variable de su padre. Sin esto, tampoco hay closure

// ___________________________BLIND______________________________________________

// var persona = {
//     nombre: "Lorenzo",
//     apellido: "Marek",
// }
// function saludar(saludo, a, b, c){
//     console.log("hola, mi nombre es", this.nombre, ",", saludo);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// var saludarPersona = saludar.bind(persona, "que hace?");
// saludarPersona(1, 2, 3);

// ____________________________CALL_____________________________________________

// var persona = {
//     nombre: "Lorenzo",
//     apellido: "Marek",
// }
// function saludar(saludo, a, b, c){
//     console.log("hola, mi nombre es", this.nombre, ",", saludo);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// saludar.call(persona, "como tas?", 1, 2, 3);

// ___________________________APPLY______________________________________________

var persona = {
    nombre: "Lorenzo",
    apellido: "Marek",
}
function saludar(saludo, a, b, c){
    console.log("hola, mi nombre es", this.nombre, ",", saludo);
    console.log(a);
    console.log(b);
    console.log(c);
}
saludar.apply(persona, ["Hola", 1, 2, 3])