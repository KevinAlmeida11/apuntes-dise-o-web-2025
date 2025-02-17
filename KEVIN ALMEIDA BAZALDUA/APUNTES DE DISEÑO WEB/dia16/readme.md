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
````


