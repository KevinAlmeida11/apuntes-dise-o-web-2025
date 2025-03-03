const nombre = require('nombre');
let num1=10;
let num2=20;


//parte 1 crear la funcion
function sumar(){
    //todo lo que este aca adentro se  ejecuta cuando use la funcion

    console.log(num1+num2);
}

function multi(){
    console.log(num1*num2);

}


//parte 2 :ejecutar la funcion

sumar();
multi();


function saludar(nombre){
    console.log("hola"+nombre+"como andas?");
}

saludar("María")//hola María como andas?
saludar("Juan")//hola Juan como andas?
saludar("Boris")//hola Boris como andas?


function saludar(nombre,edad){
    console.log("hola"+nombre+"como andas?");
    console.log("Tienes",edad);
}


saludar("María",25)//hola María como andas?,tienes 25
saludar("Juan",12)//hola Juan como andas?tines 12
saludar("Boris")//hola Boris como andas?,Tienes,undefined
console.log(nombre);



//crear tres funciones {sumar,restar y multiplicar}
//enviarle distintos valores como "parametro" a las funciones
//calcular 5+3
//calcular  10*50
//calcular 3+8


//function sumar
function sumar(a, b) {
    console.log("suma:",a+b);
}
sumar(5,3);//8

sumar(3,8);//11

//function restar
function restar(a,b){
    console.log("resta:",a-b)
}

restar(5,2);//3


// Función para multiplicar function multi(parametro1,parametro2){.....}
function multi(num_a,num_b) {
    console.log("multi:",num_a*num_b);
}

//multi(argumento 1,argumento 2);
multi(10,5);//50




function saludar(nombre,edad=30){

    console.log("Hola"+nombre);  //'Hola Maria','Hola tomas'

if(edad){
    console.log("Tiene:"+edad+"años"); //tiene 25 años
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

