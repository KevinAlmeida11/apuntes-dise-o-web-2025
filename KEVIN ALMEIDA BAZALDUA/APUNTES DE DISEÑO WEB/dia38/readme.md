# Async/Await

las desventajas de las promesas es que se vuelven dificiles de enetender cuando se anidan.Por eso se desarrollo`async/await`.

## ventajas
- legibilidad:se parece mas al codigo sincrono tradicional,lo que facilita el seguimiento del flujo de ejecucion .
- Manejo de Errores:Con el uso de `try/catch` para mejorar errores.
- Evitar "callback hell" 

```js
//mismo codigo utilizando async/await

async function traerDatos(){
try{
    const response= await fetch("http://jsonplaceholder.typicode.com/users");
    const datos=await response.json();

    console.log(datos);
    console.log(datos[0]);//los datos del primer usuario.

    //simulamps un segundo request,trayendo los posts del primer usuario

    const responsePosts=await fetch(`https:jsonplaceholder.typicode.com/posts?userId=${listaUsuarios[0].id}`);
    const listaPosts=await responsePosts.json();
} catch(error){
    console.log("Tuvimos un error",error);
}

}

```
```js
//version de Fetch como promesa
console.log(" 1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");

console.log("3) la persona se toma el vaso de agua");

function pedirPlato(plato) {

    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    
    fetch("http://restaurante.com/api/traerPlato")

        .then(response => response.json())
        .then(datos => {

            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
console.log("Paso 5: El comensal se come su comida");

        })
        .catch(error => {

            console.log("No tenemos mas atún, lo siento");
        });
}

```



```js
//version de Fetch con async/await
console.log(" 1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");


console.log("3) la persona se toma el vaso de agua");


const pedirPlato=async(plato) =>{
    console.log("2) el camarero va a buscar el plato de comida: ", plato);

    try{
     const buscarPlato=await fetch(`http://restaurante.com/api/traerPlato/${plato}`)
     const response=await buscarPlato.json();

     //que hacer con esos datos...
      console.log("Paso 4: El camarero lleva el plato de :", miPlato.plato);
      console.log("Paso 5: El comensal se come su comida");
    }catch(e){
        console.log("No tenemos mas atun,lo siento:",e);
    }
}




```
