// function contarNumeros(num){
//     for(let i=0; i<= num; i++){
//         console.log(i);
//     }
// }

// function contarNumeros(num){
//     while(true){
//         console.log(num);
//         num--;
//     }
// }
// contarNumeros(10);

// function contarNumeros(num){
//     console.log(num);
//     if (num === 0){
//         return "Terminó";
//     }
//     contarNumeros(num - 1);
// }

// function factorial(num){
//     if(num === 0 || num === 1){
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// factorial(3);

//__________________SET_________________________________________

var miSet = new Set();

miSet.add(5);
miSet.add(7);
miSet.add(7);
miSet.add(10);

console.log(miSet);

//________________STACK________________________________________

// OBJETOS => Tiene propiedades y métodos
// MÉTODOS => Que puede hacer este objeto!

// Stack puede hacer dos cosas: Puede agregar un elemnto y puede sacar un elemento (LIFO)
// Agregar y sacar van a ser métodos => los métodos son funciones!

// Para representar la pila vamos a usar un ARRAY

function Stack(){
    this.arr = []; // Propiedad
}

Stack.prototype.push = function(value){
    this.arr.push(value);
};

Stack.prototype.pop = function(){
    this.arr.pop();
};

var miStack = new Stack();

console.log(miStack);

miStack.push(50);
miStack.push(7);
miStack.push([]);
miStack.push({});
miStack.push(32);
miStack.pop();

console.log(miStack);  

//______________QUEUE_________________________________________

