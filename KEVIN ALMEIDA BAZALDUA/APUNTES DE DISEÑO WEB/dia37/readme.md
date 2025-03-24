# Contenido Asincrono vs sincronico

la sincronia es la ejecucion de tareas en un orden secuencial,es decir,una tarea se ejecuta despues de otra.

```js
console.log("paso1");
traerDatos();
console.log("Paso 3");

function traerDatos(){
    esperar(3000);
    console.log("paso 2");

}

//simulador de tiempo
function esperar (milisegundos){
    const start=new Date().getTime();
    while(new Date().getTime()- start < milisegundos);
}

```

la `asincronia` es la ejecucion de tareas en  orden No secuencial,es decir una tarea se puede ejecutar antes de que la anterior haya terminado.

la obtencion de datos asincronos se utilizan para:
-Traer informacion de DB(data base)
-Traer informacion de una API (Aplicación Programa Interface)
-Manipulacion de nuestros propios archivos.

Para lograr una tarea asincrono ,simplemente debemos enviar como parametro,una funcion de "callBack" que se ejecutara al finalizar de la tarea.

```js
console.log("paso 1");
traerDatos();
console.log("paso 3");

function traerDatos(){
    setTimeout(()=>{
       console.log("Paso2"); 
    },3000);
}

```

En JS ,debido a que la ejecucion ocurre a un solo hilo (callstack),la asincronia permite que el codigo siga corriendo minetras espera tareas lentas como leer archivos,o hacer solicitudes HTTP .Esto evita que la interfaz de usuario se congele mientras espera la respuesta.


## Funciones de Callback

```js


function procesarEntradaUsuario(callback) {
  var nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}

procesarEntradaUsuario((nombre)=>{ 
  alert("Hola " + nombre);
});

```

## Ejercicio

crear un codigo que muestre por consola:

1) un comensal solicita a un camarero un entrantes
2) el camarero va a buscar el plato solicitado (asincrono)
3) la persona toma un vaso de agua mientras espera
4) el camarero lleva el palto a la mesa
5) la persona se come el plato de comida

```js
let plato="Ensalada";
console.log("1) un comensal solicita a un camarero un entrantes",plato);

hacerPedido(plato,()=>{
    console.log("4)el camarero lleva el palto a la mesa");
    console.log("5) la persona se come el plato de comida");
});

console.log("3) la persona toma un vaso de agua mientras espera");


function hacerPedido(plato,callBack){
    console.log("2) el camarero va a buscar el plato:",plato);
    setTimeout(()=>{
        //luego de preparar el plato ejecuto la funcion de callback
        callBack()
    },3000);
};

```

# Promesas

Una promesa es un objeto que representa la `terminacion`o el `fracaso` de una operacion asincrono.

Puede estar eb uno de estos tres estados:

- Pendiente:cuando aun no se ha completado, y no se sabe si se completara con exito o no .
- Resuelta:(resolve) cuando se ha comopletado con exito.
- Rechazada:(reject) cunado ocurre un error.
  

  ```js
  const miPromesa = new Promise((resolve,reject)=>{
    console.log("Te prometo que entrego el proyecto");

    setTimeout(()=>{
        resolve("EXITO,presente el proyecto");
    },3000)
  });

miPromesa.then(result=>console.log(result))
         .catch(error=>console.log("Tuve un error",error))
         .finally(()=> console.log("les pongo una calificacion"))


Las promesas se pueden encadenar:
``
```js
miPromesa.then(result=>{//result=5
                return result +3;
           })
         .then(result2=>{//result=8
                return result2/2;
           })
         .then(result3=>{//result=4
                return
           })
         .then(result=>{
            console.log(result);
           })


```

## fetch API con .then() y .catch()

uno de los usos fundamentales de las promesas,es en el uso de la fetch API para resaltar `peticiones HTTP`a otros servidores.

La FUNCION `fetch()`nos permite hacer una peticion y nos devuelve una promesa

```js

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response=> response.json())//convertir nuestra respuesta a JSON
    .then(datos=>{
        //nuestro codigo con los datos

        console.log(datos.name)
    })

    .catch(error=>console.warn("Tuvimos un error",error));

    
```
    Ejercicio: 
    obtener 10 usuarios de la pagina de JsonPlaceholder,y mostrar en html una tarjeta para cada uno `https://jsonplaceholder.typicode.com/users`

```js
    