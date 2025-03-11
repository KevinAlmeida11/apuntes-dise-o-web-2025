# metodo de Arrays/listas



## Pop()
El metodo `pop()`,elimina el ultimo elemento de un array,y lo devuelve.
Este método modifica la longitud array.

```js

let frutas=["manzana","naranja","tomate","uvas","bananas"];
let ultimoElemento=frutas.pop();

console.log(frutas);//(4)[["manzana","naranja","tomate","uvas","bananas"]
console.log(ultimoElemento);//"bananas"
```


## push
el metodo `push()` es uno de los mas comunes,añade uno o mas elementos al final de un array.Me devuelve la nueva longitud el array.

```js
const frutas=["manzana","naranja"];
let nuevaLongitud=frutas.push("pera","tomate","sandia");

console.log(frutas);//(5) ["manzana","naranja","pera","tomate","sandia"];

console.log(nuevaLongitud);//5

```

## shift()
El metodo `shift()` elimina el primer elemento del array,y lo devulve.Este metodo modifica la longitud del array.

```js

const frutas=["manzana","naranja","tomate","uvas","bananas"];
let elementoQuitado=frutas.shift();

console.log(frutas);//(4)[,"naranja","tomate","uvas","bananas"]
console.log(elementoQuitado);//"manzana"

```

## Unshift()
con el metodo `unshit()` podemos añadir uno o mas elementos al inicio del array.Devuelve la nueva longitud del array.

```js
const frutas=["manzana","naranja","tomate"];
let nuevaLongitud=frutas.unshit("pera","ciruela");

console.log(frutas);//(5)["pera","ciruela","manzana","naranja","tomate"];
console.log(nuevaLongitud);//5
```
## Splice()
el metodo `splice()`cambia el contenido de un array Eliminando,creando o reemplazando sus elementos.Modifica el valor original,y recibe 3 parametros.Devuelve los elementos eliminados.

-el indice del vector se va a realizar la operacion.
-la cantidad de elementos a eliminar.
-los elementos que quiero pagar.


```js
const frutas=["manzana","naranja","tomate","uvas","bananas"];
let frutasEliminadas=frutas.splice(2,2,"pera","ciruela");

console.log(frutas);//["manzana","naranja","pera","ciruela","bananas"];
console.log(frutasEliminidas);//["tomate","uvas"]
```


```js
let lenguajes=["phyton","java","javascrip","php","C++","C#"];
lenguajes.splice(0,1);//Elimino el primer valor array(shift())...quita Python
lenguajes.splice(-1,1);//Elimina el ultimo valor del array(pop ())...quita"C#"
lenguajes.splice(-1,0,"c","Cobol");//se posiciona al final,no borra nada y agrega "C" y"Cobolo"

//quitar 2 elementos a partir del indice 2
lenguajes.splice(2,2);

```

## ForEach

El forEach recorre cada elemento de una lista y ejecuta la funcion indicada dentro del mismo.

```js
["a","b","c"].forEach((letra)=>{
    console.log(letra);
})

```

## Map



Devolver el doble de cada elemento:

```js
const listaNumeros=[5,15,7];


const listaNumerosDobles=listaNumeros.map((num)=>{
    return num*2
})
console.log(listaNumeroDobles);//[10,30,14]


//se puede optimizar cuando nuestra funcion
//tiene una sola linea, y esa linea es un return.
const listaNumerosDobles=  listaNumeros.map(num=>num*2);

``` 

## Buscar Item
el metodo `find()`devuelve el primer elemento del array que cumpla la funcion de prueba proporcionada.En caso contrario devuelve undefined.Devuelve un elemento

```js
const numeros =[5,12,8,130,44,12];
const item= numeros.find(num => num > 10);
console.log(item);//12
//const item=numeros.find((num)=>{
    //if(num>10){
       // return num;
        //terminar programa
   // }
//})
```

## Buscar multiples items

la funcion `filter()` devuelve un array/lista con todos los elementos que cumplan la condicion especificada.Devuelve una lista

```js
const numeros =[5,12,8,130,44,12];
const listaItems=numeros.filter(num =>num>10);
console.log(listaItems);//[12,130,44,12]


const personas=[
    {nombre:"Juan",edad:33}
    {nombre:"Pedro",edad:18}
    {nombre:"Ana",edad:15}
    {nombre:"Luis",edad:9}
    {nombre:"Juan",edad:30}
];

//Obtener una lista de las personas mayores de edad
const listaMayores=personas.filter(persona=>persona.edad>=18);
console.log(listaMayores);

//[
//{nombre:"Juan",edad:33}
//{nombre:"Pedro",edad:18}
//{nombre:"Juan",edad:30}
//]

```

1. De una lista de numeros devolver solo los Impares.
```js
const numeros=[3,6,11,24,15];
const numerosImpares=numeros.filter(num=>num%2 !=0);//[1,3,5,7] que el numero se divede a 2 el resultado no es 0 entonces es impar
console.log(numerosImpares);
```


2. de una lista de personas imprimir su nombre en consola.
```js
const Personajes=[
   {nombre:"Juan",edad:33}
   {nombre:"Pedro",edad:18}
   {nombre:"Juan",edad:30}
];

const listaNombres=Personajes.map(persona=>{
    console.log(persona.nombre);
 });

```


3. Encuentra un libro con el titulo especifico(buscar "La odisea")
```js
const libros=[
    {titulo:'El Quijote',autor:'Miguel de Cervantes'},
    {titulo:'Cien años de soledad',autor:'Gabriel Garcia Marquez'},
    {titulo:'La Odisea',autor:'Homero'},
];
const EllibroBuscado=libros.find(libro=>libro.titulo=='La Odisea');
```
3.b uSAR LOS METODOS DE STRING PARA BUSQUEDAS PARCIALES "cien años".
4. Dado una lista de numeros desordenados,ordenar de menor a mayor(investigar)