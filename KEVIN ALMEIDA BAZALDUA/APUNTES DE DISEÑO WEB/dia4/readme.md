# dia 4

## selectores css

```css

/* selector de id */
#caja1 {  
    color: blue;
  }

/* selector de clase */
.caja {
    color : red;
}

.cajaImportante {
    color: yellow;
    font-size:20px;
}

/* selector de etiqueta */

div {
    color: green;
}



/* selector de multiples item */
se selecciona con alt  en windows o en mac con option yse seleccionan varios items para abrir

#tituloprincipal, h2, #caja1, .caja {
    color: red;
}

/* selector de atributos */
img[alt="foto 1"]{
    color: brown;
}

a[href="https://x.com/miperfil"]{
background: black;
color : white;
}

<div[class*="test"]{ /* el asterisco hace de comidin en la busqueda */
background: salmon;
}
/*selector de todos los hijos directos */
header> nav > #logo > a {}

/*selector de todos los descendientes */
header a {}

/*selector de todos los  */

```

```html
<header>
    <nav>
        <h1><a href=>





<h1 id="tituloprincipal">Título</h1>
<h4 class="subtitulo"></h4>
<img src="./img/foto.png" alt="foto 1"/>
<img src="./img/foto.png" alt="foto 1"/>
<img src="./img/foto.png" alt="foto 1"/>

<div class="caja cajaimportante" id="caja1">soy un div</div>

<div class="caja cajaimportante" id="caja1">soy un div</div>
<div class="caja cajaimportante" id="caja1">soy un div</div>
<div class="caja cajaimportante" id="caja1">soy un div</div>

<a ref="http://x.com/miperfil">mi oerfil en x<>


```
# reset css
buscamos que todos los navegadores(chrome,safari,brave,firefox)inicien nuestros proyectos con los mismos estilos,sin aplicar los propios.

reset minimo 
```css

/* el "*" incluye a todos los elementos de mi web*/
/* el border-box utiliza el borde de la caja como ancho,en vez del contenido */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

````

# mini-actividad
1. crear una pagina con 2 cajas que contenga parrafos
2. agregar estilos a tus cajas para visualizar bordes,margenes y padding.
3. a la segunda caja,agregarle al estilo "box-sizing"
4. 