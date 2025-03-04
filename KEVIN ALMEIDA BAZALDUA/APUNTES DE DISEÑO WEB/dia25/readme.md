```js

const edad=25;
//para que cumpla ambas opciones usar &&
if(edad<= 120 && edad>= 18){
    console.log("eres mayor de edad");
}

//para que cumpla alguna de las 2 opciones usar ||
if(edad>=18 || tienePermiso==true){
    console.log("puede entrar");

}
```
## FORMA DE ESCRIBIR FUNCIONES

```js

//esta funcion tiene 2 parametros y devuelve la suma de ambos
function sumar(num1,num2){
    return num1+num2;//return es la palabra clave para devolver algo como la suma.
}

// este llamado a la funcion envia como "argumento" 2 numeros
const resultado=sumar(2,3);

//console.log(sumar(2,3));

console.log(resultado);


//otro ejemplo
function saludar(nombre){
    console.log("hola"+nombre+"como estas?");
}


//funcion sin nombrar

const sumar=function(num1,num2){
    return num1+num2;
}


//funcion flecha

const sumar=(num1,num2)=>{
    return num1+num2;

}

//funcion flecha reducida
//solo se puede utilizar  y sirve si mi funcion es de 1 sola linea.
//y esa linea es la de return...


//quitar llaves y quitar return
const sumar=(num1,num2)=>num1+num2;





const alumno={
    nombre:"juan",
    edad:34,
    sumar: function(num1,num2){

    }
}

alumno.sumar(3+1);

miBoton.addEventLustener("click",()=>{
    console.log("me hicieron click");
});
```

## Truthy/Falsy

En Js podemos tenr un valor TRUTHY O FALSY.un valor es Truthy es quel que se evalua como verdadero en  un contexto booleano,mientras que falsy se evalua como falso.
Podemos utilizar este concepto para la toma de decisiones en nuestro codigo.

valores falsy:`undefined,null,NaN,0,"",false`

Valores truthy:todos los demas.

ejemllos de valores que parecen falsy,pero que son truthy:

```js

//son todos TRUTHY!!!

const val="false";
const val=-1;
const val=" "// es truthy porque tine espacio.
const val=0.1;
const val="0";
const val="null";
const val="undefined";

```
```js
edad=19;
if (edad>18){
    //truthy:es par
}else{
    //falsy:es impar
}

numero=16;
if (numero%2==0){
    //truthy:es par
}else{
    //falsy:es impar
}

if(""){
    console.log("nom me ejecutan nunca");
}else{
    console.log("si se ejecuta");
}

```




```js
    const miElemento=documento.querySelector("#miBoton") ;//calses,ids y tag

    const miElemento=documento.getElementById("#miBoton"); //solo para ids

     const container=documento.querySelector("#content") ;
     






