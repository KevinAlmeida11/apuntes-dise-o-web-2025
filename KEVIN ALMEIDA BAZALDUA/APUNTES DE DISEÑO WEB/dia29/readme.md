## Operacion terneria
una forma de reescribir el `if...else...`.Se compone de tres partes:
1. Una expresion que se evalua.
2. expresion que se ejecuta en caso de ser cierta.
3. expresion que se ejecuta en caso de ser falsa.

Simplifica la legibilidad,pero no se recomienda para anidadr operaciones ternarias,o cuando el resultado de la operacion es muy complejo o posee mas de una linea.

- No se puede utilizar ternarias si no tengo el "else.."(solo me sirven si tengo truthy y falsy).

- Solo se puede utilizar si el resultado es de una linea.


```js

let numero=10;
let mensaje;
if(numero % 2==0){
    mensaje="Es par";
} else{
    mensaje="Es impar";
}

//version ternaria:
//"0"==0
//"0" ===false
let mensaje=(numero%2===0)? "Es par"   :  "Es impar"  ;



if(edad>=18){
    mensaje="Es mayor de edad";
}else{
    mensaje="Es menor de edad";
}
//version ternaria:

let mensaje=(edad>=18)? "Es mayor de edad" : "Es menor de edad";

let mensaje=edad>=18? "Es mayor de edad" : "Es menor de edad";

let mensaje=edad>=18 ? "Es mayor de edad" 
                     : "Es menor de edad";
   
```

```js
//funcion que recibe 2 numeros y devuelve el mayor
function mayor(num1,num2){
    if(num1>num2){
        return num1;
    } else{
        return num2;
    }
  
}

function mayor(num1,num2){
   return num1>num2 ? num1 :num2;
}


numMayor=mayor(5,3);//5
numMayor=mayor(-5,7);//7

```

crear una funcion que reciba 2 parametros (`juagdor 1` y `jugador 2`),y que devuelva si el jugador1 le gana al jugador 2 en "piedra","papel","tijera".tiene que devolver un mensaje quien gano.

```js


function ganador(jugador1,jugador2){
//caso de empate
if(j1===j2){return "empataron";}

//los casos donde gana jugador1
if( (j1==="tijeras" && j2 ==="papel")  ||
    (j1==="piedra" && j2 ==="tijeras")  ||
    (j1==="papel" && j2 ==="piedra")
){
    return "ganó el jugador 1";
}  
    //por descartes gana jugador 2
    return "ganó el jugador 2";
}

```


## Recorrer Arrays/Listas

### ForEach

- recorrer cada item de un array, y ejecuta una funcion dentro del mismo.
- Se le asigna una variable a cada item.

ejemplo:
listaAlumnos->alumno
listaLetras->letra
listaHobbies->hoobie

```js
const listaLetras =["a","b","c"];

letras.forEach((letra)=>{
    letra=letra.toUpperCase();
    console.log(letra);
} )
```

### modificar elementos con un forEach

si queremos usar el indice podemos leerlo agregando un segundo parametro a nuestra funcion flecha.

```js
const listaLetras =["a","b","c"];
listaLetras.forEach((letra,indice)=>{
    console.log(letra,indice);
    listaLetras[indice]=letra.toUpperCase();

})

console.log(listaLetras);//(3)["A","B","C"]

```

### Map

si deseamos generar una copia de la lista ,podemos utilizar el metodo map(),quien crea una nuevo array con los resultados de la funcion flecha.

```js
const listaNumeros=[1,2,3,4,5];

const nuevaLista=listaNumeros.map((numero)=>{
    return numero*2;
})

console.log(listaNumeros);//(5)[1,2,3,4,5]
console.log(nuevaLista);//(5)[2,4,6,8,10]

```