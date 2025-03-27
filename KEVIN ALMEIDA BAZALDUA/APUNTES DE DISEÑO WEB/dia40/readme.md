# LocalStorage

sirve para alamacenar info en nuestro navegador.
la informacion se guarda segun el dominio
solo guarda STRING (textos),si quiero guardar Arrays,o objetos,utilizamos JSON.Para ello usamos`JSON.stringify(nuestraLista);` y para volver a tener nuestros datos en JS,usamos `JSON.parse(nuestroString);`

```js
localStorage.setItem("edad",25);
localStorage.getItem("edad");//"25"<- texto

```

para que se usa:
- guardar preferencias del usuario:"modo claro/oscuro",tamaño de fuente,si la barra latera esta abierta.
- recordar las decisiones del usuario,por ejemplo si ya acepto o no un mensaje de bienvenida.
- almacenar datos sin necesidad de un servidor.Por ejemplo CARRITOS DE COMPRA.
  

  ```js

  //catalogo.html
  const productos=["productos 1","producto 2","producto25"];

  productos.push("producto 4");

  const textoAGuardar=JSON.stringify(productos);//convierto mi array a un string
  localStorage.setItem("ListaDeProductos",textoAGuardar);

  //checkout.html
  const textoProductos=localStorage.getItem("listaDeProductos");
  const listaProductos=JSON.parse(textoProductos);
    ```

  # SetTimeout
```js
  //version de funcion externa
  let sumar=()=>{

  }
const idTimeout=setTimeout(sumar,2000);

//version de una sola linea
  setTimeout(()=>{

  },2000);

  //quitart el timeout
  clearTimeout(idTimeout);
  ```

  # SetInterval

  ```js
  const idInterval=setInterval(sumar,2000);
  clearInterval(idInterval);

  ```
