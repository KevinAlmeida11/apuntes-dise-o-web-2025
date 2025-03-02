const nombre = require('nombre');
let num1=10;
let num2=20;


//parte 1 crear la funcion
function sumar(){
    //todo lo que este aca adentro se  ejecuta cuando use la funcion

    comnsole.log(num1+num2); 30
}



//parte 2 :ejecutar la funcion

sumar();



function saludar(nombre,edad){
    console.log("hola"+nombre+"como andas?");'Hola maria como andas?','Hola Juan como andas'
    console.log("Tienes",edad);['tienes',25],[`tienes`,12],[`tienes:`,undefined]
}

console.log(nombre);`Pedro`



//crear tres funciones {sumar,restar y multiplicar}
//enviarle distintos valores como "parametro" a las funciones
//calcular 5+3
//calcular  10*50
//calcular 3+8


//function sumar
function sumar(a, b) {
    console.log("suma:",a+b);
}
sumar(5,3);



// Función para multiplicar
function multi(num_a,num_b) {
    console.log("multi:,num_a*num_b");
}
multi(10,5);


function saludar(nombre,edad=0){
console.log("Hola"+nombre);  'Hola Maria','Hola tomas'

if(edad){
    console.log("Tiene"+edad+"años"); 
}

}

saludar("maria");
saludar("tomas",25);




//return num1+num2

function sumar (num1,num2){
    //return num1+num2;
    const res=num1+num2;
    return res;
}



const resultado=sumar(5,3);
console.log(resultado); 8
console.log(sumar(5,3)); 8