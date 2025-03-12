# dia 32
## Listeners para eventos del usuario

son fujnciones que se ejecutan en respuestaa eventos especificos que ocurren en el dom,como por ejemplo clicks,movimiento del mouse,teclas presionadas,teclas levantadas,ETC.Para agregar un evento usamos `addEventListener(evento,funcion)`

```js
//seleccionar item del DOM

const boton=document.querySelector('button');

//Agregar un event listener para el evento de click
boton.addEventListener("click",mifuncion);
//boton.addEventListener("click",()=>{
    //console.log("HOLA");
//});

function miFuncion(){
    console.log("HOLA");
}
```
## Pasar parametros a funciones con eventos

a veces necesitamos enviar parametroa adicionales a la funcion que maneja el evento.

```js
boton.addEventListener("click",function(){
})

//ejecutar la funcion sin enviar parametro
boton.addEventListener("click",mifuncion);

//ejecutar la funcion enviando parametro,la debo meter dentro  de una funcion flecha.

boton.addEventListener("click",()=>miFuncion("Maria"));

function mi funcion(usuario){
    console.log(`Hola ${usuario}`);
}

```

Ejercicio:
1.cambiar el color de un elemento al hacerle click:
crear 2 botones(rojo y azul) que cambie ek color de fondo de un bloque ,al hacerle click.La funcion de cambio de color tiene que ser la misma.

```js

```


2:Mensaje al pasar el mouse:
crear un elemento que muestre un mensaje cuando el raton pase por encima de el.


### Parametro "e" (event/evento)
Es un objeto que contiene informacion sobre el evento ocurrido.Este se para automaticamente a la funcion que maneja el evento.

```js

function handleClick(){
    console.log("El boton ha sifo clickeado");
    console.log("coordenadas del mouse:" ,e.clientX,e.clientY)
}

boton.addEventListener('click',handleClick);

```
1.crear un formulario
