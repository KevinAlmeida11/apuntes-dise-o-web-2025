# BEM (BLOCK,ELEMENT ,MODIFIER)

# suite css

-block-> componente
-element->elemento
modifier->modificador

nuevos
-utilities
-estados

## utilities:

-se escribe con `u-utilityName` por ejemplo `u-red`
-se escribe con u-camelCase.
-se utiliza para aplicar un estilo a cualquier elemento.

```css
.u-red{
    background-color:red;
    color:white;
}


.u-big{
    font-size:5rem;
}
/* utilities responsive */
.u-sm-text{
    /* texto pequeño(small) */
}
.u-md-text{
    /* texto pequeño(medium) */
}
.u-lg-text{
    /* texto grande(large) */
}
```

# componente

Igual al bloque de BEM,pero se escribe con PascalCase.Por ejemplo `Header`,`MiBoton`,`SeccionHero`

# Elementos (Part,DescendentName)

Igual que el elemento en BEM ,pero se escribe con CAMELcASE.Por ejemplo `Header-title`,`Card-imagefront`,`Tweet-bodyImage`,`Tweet-bodyText`.

```html
<article class="Tweet">
    <header class="Tweet-Header">
        <img class="Tweet-headerImg" src="./img/mi-foto.png" alt="">
        ....
    </header>
    <div class="Tweet-bodytext">

        ...
     </div>
</article>
```
## modificadores
al igual que en BEM,y se utiliza con camelCase `Componente--nombreModificador`

```html
<button class="Button">Boton normal</button>
<button class="Button Button--navidad">Boton de Navidad</button>
```
## Estados

Nuevo: clases para elelemntos que marcan el estado de un componente/elemento.
Se escribe con camelCase y usa la palabra `is-`delante.

```css
.tweer{
    /* estilos de un tweet común */
}
.Tweet.is-expandend{
/* solo cambios para el tweet abierto */
}
```

```html
<article class="Tweet">
    ...
</article>
<article class="Tweet is-expanded">
    ...
</article>
```

# Grid continuación (2/2)

existe la opcion minmax() que nos permite definir un tamaño minimo y maximo para las columnas y filas.
```css

.container{
    display:grid;
    grid-template-columns: minmax(100px,1fr) minmax(200px,2fr)minmax(100px,1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap:10px;
}
```

# Grid Template Areas
Podemos nombrar las celdas utilizando `grid-template-areas`y asignando un nombre a cada una.

```css
.container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,100px);
    grid-gap:10px;
    grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
}

.item-1{
    grid-area: header;
}
.item-2{
    grid-area: main;
}
.item-3{
    grid-area: sidebar;
}
.item-4{
    grid-area: footer;
}
```

podemos utilizar `justify-items`y `align-items`para alinear los elementos dentro de la celdas.sus opciones posibles son :star,end,center,strech y baseline.Por defecto se aplica strech.

```css
.container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,100px);
    grid-gap:10px;
    justify-items:start;
    align-items:end;
}
```

podemos decirle a un item especifico que se alinee de manera diferene utilizando `justify-self` y `align-self`.sus opciones son :start,end,center,strech y baseline.

```css
.item-1{
    justify-self:center;
    align-self:stretch;
}
```

podemos alinear nuestro grid en base a su contenedor utilizando `justify-content`y `align-content`.sus opciones son: star,end,center,strech,space-around,space-between y space-evenly.

```css
.container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,100px);
    grid-gap:10px;
    justify-content:center;
    align-content:center;
}
```
podemos crear un grid responsive con el uso de `auto-fit`.esto nos permite que elementos se ajusten al tamaño del contenedor.

```css
.container{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    grid-template-rows: repeat(4,1fr);
    grid-gap:10px;
}
```
