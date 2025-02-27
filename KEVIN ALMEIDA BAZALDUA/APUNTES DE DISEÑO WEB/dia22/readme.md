## Javascript

Es un lenguaje de programación de alto nivel,interpretado y orientado a objetos.Lo utilizamos para crear contenido dinámico e interactivos en sitios web.

Alto nivel: esta diseñado para ser facil de leer y escribir por humanos.
Interpretacion:se ejecuta en tiempo real,linea por linea,No necesita ser compilado.

```js
let numero = 1;
console.log("Linea 1 y número vale: ",numero); 
//improime en consola el texto:linea 1 y numero vale :1
numero=numero +2;
console.log("Linea 2 y número vale: ",numero); 
//imprime en consola el texto:linea 2 y numero vale :3

```

orientados a objetos

Js utiliza un paradigma(OOP-object oriented programing),significa que organiza su codigo en "objetos".Un objeto es una coleccion de `propiedades` (caracteristicas) y `metodos`(funciones)que se pueden leer y manipular.

Perro:
//Propiedades
-color:blanco y negro
-nombre:Lasie
-
//métodos
-ladran()
-moverLaCola()

```js
// ejemplo de propiedades y métodos
const alumno = { 
    nombre: "Lucía Perez",
    edad:35,
   hoobies:["futbol","Programar","leer","jugar a pokemon"],
    saludar : funtion() {
        console.log ("Hola,mi nombre es Lucía");

    }
}

// para imprimir el nombre del alumno usamos algo como:
console.log(alumno1.nombre);
console.log("Me llamo,alumno.nombre",y tengo,alumno.edad,"años");

//me llamo lucia perez y tengo 35 años

// para ejecutar un método/función tenemos que usar() al final.
alumno.saludar();


```
## Dónde podemos probar/codificar con JS
-En el navegador:En la pestaña de consola.
-en etiqueta de `<script>`dentro de HTML,y se suelen poner al final antes de cerrar el `<body>`.
-se pueden usar archivos externos con la extension `.js`linkeando eb nuestro html <script src="./jsmiscript.js"></script>
-usar extension de VSC--> Quokka.Para empezar usar:"comand+p" ">Quokka"
-usar paginas externas:

1.https://playcode.io/
2.https://codepen.io/
3.https://jsfiddle.net/

# funcionalidades

-Manipulacion del DOM (document objet model):Agregar,modificar o quitar elementos HTML Y CSS.
-Procesar Formularios:verificar datos ingresados por el usuario,y realizar formularios complejos de multiples secciones.
-Manejo de animaciones:Manipular efectos visuales y animaciones en nuestra web.
-Manejo de eventos:Responder a las acciones del usuario,como por ejmplo:hacer click,mover el mouse,desplazarse por la web...
-Comunicacion asíncrona mediante AJAX/Fetch:enviar y recibir datos de un servidor sin tener que recargar la pagina.


## tipos de datos

-numeros: enteros,decimales,positivos,negativos,etc.
-cadenas de Textos (strings):textos,palabras,frases,1 letra.Entre comillas 'simples',"dobles", o `backticks`.
-booleanos: verdader o falso
-listas de cosas(arrays):se escriben con corchetes [] y los itemes se separan con coma.
-Objetos (object):Coleccion de propiedades (caracteristicas) y métodos (funcionalidades),y se escriben con {}

```js

//primitivos
let texto="Hola Alumnos de CEI";
let textoConComillas='Hola estoy muy "bien" ';
let textoConComillasDobles="I'm Tomi";
let texto= `Quiero comillas 'simples' y "dobles"` ;//template string (plantilla)

let numero=123;
let numero2="123";//"123"
numero2= Number(numero2);//123
numero2= Number("123");//123

let entero =25; //numero entero
let decimal=22.30; // numero decimal
let negativo =-5;
const PI =3.14159;

let estaPrendido =false;
let isPrimary=true;
let onActive=false;



//referenciales

//objeto
const alumno = {
    nombre:"Mario",
    edad:33,
    isRecibido: false,
    presentarProyecto: function() {
        this.isRecibido=true;
        this.edad=34;
    },
    irseDeVacaciones: function(){...}
}

//como leer un objeto
alumno.edad; //33
alumno.presentarProyecto();//presenta el proyecto

//como escribir en un objeto
alumnos.edad=37;


//listas o ARRAYS

const alumnosDeDW=["Jhon","María","Sonia","Gurutze","Ainoha","Alan",...];
const edades=[25,32,18,49];
const listaMixta=[
                    1,
                    "Juan"
                    true,
                    {val1:"hola",val2:"chau"}
                ];
//las listas comienzan su indice en 0

console.log(alumnosDeDW[0] );//"Jhon"
console.log(alumnosDeDW[1] );//"María"
console.log(alumnosDeDW[2] );//"Sonia"


//Para escribir un valor en una lista

alumnosDeDW[0]="jhon Edward";
console.log(alumnosDeDw[0])//"Jhon Edward";

```



```js

//Ejercicio 1: Creación y acceso a arrays

//- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".

const frutas=["Manzana", "Banana", "Naranja"];

//- Imprime en la consola el primer elemento del array frutas.

console.log(frutas[0]);

//- Cambia el segundo elemento del array frutas a "Mango".
frutas[1]="Mango";

//-Imprime en la consola el array completo para verificar el cambio.
console.log(frutas);
console.log(frutas.lenght);




//Ejercicio 2: Creación y acceso a objetos

//- Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
const persona={
    nombre:"kevin",
    edad:30,
    ciudad:"Lima",
}

//- Imprime en la consola el valor de la propiedad nombre del objeto persona.
console.log(persona.nombre);

//- Cambia el valor de la propiedad edad a 30.
persona.edad=30;

//- Imprime en la consola el objeto persona completo para verificar el cambio.
console.log(persona);






//Ejercicio 3: Arrays de objetos

//- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades `nombre`y `nota`.
const listaEstudiante=[
    { nombre:"juan",nota:10},
    {nombre:"María",nota:9},
    {nombre:"Lucas",nota:4}
];

//- Imprime en la consola el nombre del segundo estudiante.

console.log(listaEstudiantes[1]);
console.log(listaEstudiantes[1].nombre); 

// - Cambia la nota del primer estudiante a 95.
listaEstudiante[0].nota=95
console.log(listaEstudiantes)

// - Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.

for( let i=0;i<10; )
  


// Ejercicio 4: Métodos en objetos

// - Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
const calculadora={
    a:5,
    b:3,
    sumar:funtion(){
        comsole.log(this.a + this.b)
    }
}


console.log(calculadora.a); 5
console.log(calculadora.b);3
calculadora.sumar();

calculadora.a=15;
calculadora.b=30;
calculadora.sumar(); // 45
// - Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.