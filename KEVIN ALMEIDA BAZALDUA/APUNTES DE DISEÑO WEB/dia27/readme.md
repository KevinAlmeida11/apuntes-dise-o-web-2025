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
//saludo=saludo+"¿Cómo estas?";se le agrega algo mas

console.log(saludo);//hola, ¿Cómo estas?

//ejemplo de uso para concataner con + y manipulacion del dom
divListaDeProductos.innerHTML+="<li> item 1 </li>";

```


2. Interpolación

cuando usamos plantillas literales(`template lieterals`/template Strings),se pueden insertar `variables` o `expresiones` dentro de una cadena de texto usando `${}`

```js

let nombre="Ana";
let edad edad=25;

//interpolacion

let mensaje=`Hola, mi nombre es ${nombre} y tengo ${edad}años.`;

//concatacion
let mensaje="Hola,mi nombre es " + nombre+"y tengo"+ edad+"años."

const mensaje=edad +1;  //26
const mensaje=edad+1+" años";//251 años
const mensaje=(edad+1)+" años";//26 años

//insertar expresion 

const total=50;
const iva=0.21;
console.log(`El total con impuestoses ${total + (total*iva )}`);

const texto="El total con impuestos";
["E","L"," ","t",] PALABRA ES UNA LISTA DE LETRAS
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

const palabras=texto.split("a");
console.log(palabras);//["Me enc","nt","J","v","Script"]

const palabra2=texto.split("encanta");
console.log(palabras2);//["Me","Javascript"];

const email="maria@alumnos.cei.es";
const separacion=email.split("@");
console.log(separacion);//["maria","alumnos.cei.es"];

//slice
let frase="Aprender javascript es divertido";

console.log("Parte de la frase:",  frase .slice(9,19)  );//javascript

consola.log("Desde el indice 9 al final:", frase.slice(9) );//javascript es divertido
console.log("psrimeras 10 letras",frase.slice(0,10));//Aprender a j



//Replace
let frase"Holamundo. hola hola hola hola universo";
console.log("Reemplazar 'hola' por 'Hola':", frase.replace("hola","Hola") );
//cambia la primera que encuentre


console.log("Reemplazar 'hola' por 'Hola':", frase.replaceAll("hola","Hola") );
//Hola mundo.Hola Hola Hola Hola universo;

console.log("Reemplazar todas von RegEX:",FRASE.REPLACE(/hola/g,"Hola"));



//trim()

//ideal para <textarea> y para forms
let frase="    Hola mi nombre es     Luka    ";
console.log(frase.trim());//"Hola mi nombre es     Luka"

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

console.log( "me causa mucha gracia:", risa.repeat(3));//jajaja






```

podemos combinar metodos

```js
let frase="    No me gusta Javascript en diseño web   "

//trim(), toUpperCase(),replace()

let resultado=frase.trim() //elimina espavios delante y detras
                   .toUppercase()//pasarlo a mayusculas
                   .replace("no me gusta","me encanta");

let resultado=frase.trim().toUppercase().replace("No me gusta","me encanta");

//ME encanta javascript en diseño web



const hobbies=["futbol","Programar en Js","leer"];

const cant=hobbies.length;//3
console.log(cant);//3
console.log(hobbies[0]);//'futbol'


for(let i=0;i<hobbies.length;i++){
    const hobbie=hobbies[i];//1 hobbie
    
    console.log(hobbie); //'futbol','Programar en JS',`leer'
    console.log(hobbie.toUpperCase());//'FUTBOL'
    console.log(hobbie.toLowerCase());//'futbol'
}


