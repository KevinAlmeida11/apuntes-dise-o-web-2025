# manipulacion de textos

1. concetanación

```js
const nombre="Lucía";
const apellido="Perez";

const nombreCompleto=nombre+" "+apellido;//LucíaPerez
const fullName=apellido+", "+nombre;//Perez, Lucía

//concatenar usando +=

let saludo="Hola, ";
saludo +="Cómo estas?";
//saludo=saludo+"¿Cómo estas?";

console.log(saludo);//hola, ¿Cómo estas?

```


2. Interpolación

cuando usamos plantillas literales(template lieterals/template Strings),se pueden insertar `variables` o `expresiones` dentro de una cadena de texto usando `${}`

```js

let nombre="Ana";
let edad edad=25;

//interpolacion

let mensaje=`Hola, mi nombre es ${nombre} y tengo ${edad}años.`;

//concatacion
let mensaje="Hola,mi nombre es " + nombre+"y tengo"+ edad+"años."

//insertar expresion 

const total=50;
const iva=0.21;
console.log(`El total con impuestoses ${total + (total*iva )}`);

const texto="El total con impuestos";
//["E","L"," "] PALABRA ES UNA LISTA DE LETRAS
```

3. Método de Strings(texto)
Js nos ofrece multiples metodos/funciones àra manipular cadenas de texto.

-`toUpperCase()` y `toLowerCase()`
Convierte todas las letras de una cadena en mayusculas o minusculas.

-`split()`
divide una cadena de texto en una lista/array basada en el separador elegido.

-`slice()`
Extraer una porcion de la cadena basada en indices de incio y fin (sin incluir el indice final)

-`replace` y `replaceALL()`
Reemplaza una parte de la cadena por otra(la primer ocurrencia o parte que encuentre lo va a reemplazar).
Soporta expresiones regulares (regex) para potenciar la busqueda.

- `trim()`
Eliminar todos los espacios en blanco al incio y al fin dela cadena.

-`includes()`
verifica si una cadena contine una subcadena especifica.

-`starsWith()` y `endsWith()`

Verifica si una cadena comienza o termina con una subcadena especifica.

-`repeat()`
Repite una cadena un numero especifico de veces.





```js
let texto="me encanta JavaScript";

//toUpperCase() , toLowerCase()
console.log(texto.toLowerCase());//me encanta javascript
console.log(texto.toupperCase());//ME ENCANTA JAVASCRIPT

//split

const palabras=texto.split(" ");
console.log(palabras);//["Me","encanta","JavaScript"]

const palabra2=texto.split("encanta");
console.log(palabras2);//["Me","Javascript"];

const email="maria@alumnos.cei.es";
const separacion=email.split("@");
console.log(separacion);//["maria","alumnos.cei.es"];

//slice
let frase="Aprender javascript es divertido";
console.log("Parte de la frase:",  frase .slice(9,19)  );//javascript
consola.log("Desde el indice 9 al final:", frase.slice(9) );//javascript es divertido

//Replace
let frase"Holamundo. hola hola hola hola universo";
console.log("Reemplazar 'hola' por 'Hola':", frase.replace("hola","Hola") );
//cambia la primera que encuentre


console.log("Reemplazar 'hola' por 'Hola':", frase.replaceAll("hola","Hola") );
//Hola mundo.Hola Hola Hola Hola universo;


//trim()

let frase="    Hola mi nombre es     Luka    ";
console.log(frase.trim());//"Hola mi nombre es     Luka

//includes
let frase="El sol brilla en el cielo";
console.log("Contiene 'sol'?"+ frase.includes("sol"));//true
comsole.log("Contiene 'luna'?"+frase.includes("luna"));//false



//starsWith y endsWith
let frase="Javaascript es genial";

console.log("¿Empieza con 'Java':", frase.starWith("Java"));//True
console.log("¿Empieza con 'Java':", frase.starWith("java"));//false
console.log("¿Termina':", frase.starWith("java"));//false


//repeat
let risa="ja";

console.log( frase.repeat(3));//jajaja




```

podemos combinar metodos

```js
let frase="    No me gusta Javascript en diseño web   "

//trim(), toUpperCase(),replace()

let resultado=frase.trim() //elimina espavios delante y detras
                   .toUppercase()//pasarlo a mayusculas
                   .replace("no me gusta","me encanta");

let resultado=frase.trim().toUppercase().replace("No me gusta","me encanta");

