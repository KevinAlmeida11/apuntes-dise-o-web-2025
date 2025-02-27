## Variables Referenvciales vs Primitivas

Primitivo es la cubeta donde guardamos algun dato.`Strings`,`Numeros`,`booleanos`,y otros... estas pueden ser `let` o `const`

Referencial e la llave del camion(no el camion),donde guardamos muchos datos.`Objetos,Array,Funciones`.Estos son siempre `const`

```js

const num=25;
num=30;//ERROR!!! no se puede modificar una constante


const alumnos=["juan","maria","pedro"];
alumnos[0]="Tomas";// ok!! se puede modificar el contenido de un array.

```
## Comentarios en JS

-Comentario simple:se utiliza `//`para 1 sola linea.
comentario simples en linea:puede usarse`//`al final de la linea
-Comentario en Bloque: `/*.....*/`para hacer comentarios de multiples lineas.
-Comentario de Documentacion:se utiliza `/**......*/` para iniciar un bloque informativo.se usa mucho para funciones.

```js
// 1 sola linea
let nombre="juan";// 1 sola linea al final

//  https://patorjk.com/software/taag/#p=display&f=Big%20Money-nw&t=Hola%20CEI

//  https://fsymbols.com/es/arte-de-texto/ 

*/

/**
 * Esta es una funcion que suma 2 numeros,
 * 
 * @param {number}num1-El primer numero
 * @param {number}num2-El segundo numero
 * @return {number} La suma de num1 y num2
 * 
 * */
function sumar(num1,num2){
    return num1+num2;

}

/*-----------------------------------------------*/
//              Seccion 1                        //
/*-----------------------------------------------*/
```
## Operadores aritméticos

Tenemos operadores de asignacion,comparacion,logicos.

los aritmeticos mas comunes son:

- suma "+": suma 2 valores
- resta "-";resta 2 valores
- Incrementar un valor "++":Incrementar el valor de una variable
- Decrementar un valor "--":Decrementa el valor de una variable.
- multiplicacion "*"
- division "/".
- -modulo "%": el resto de la division de 2 valores.

```js
let a=10;
let b=5;

let suma= a+b;//15
let resta=a-b;//5
let multi=a*b;//50
let div=a/b;//2
let modulo= a%b; //0

a++//incrementa en 1=11
b--//decrementa en 1=4



//simbolos comparativos
===//si son iguales estrictamente(el mismo valor y el mismo tipo)
!==//si no son estrictamente iguales.
==// para ver si son distintos
!=//para ver si son distitntos
<//para ver si es menor
>//para ver si es mayor
<=//para ver si es menor o igual que....
>=//para ver si es mayor o igual que...
if(a==b){
    //se hace esto.

}else{
//se hace este otro
}
```

