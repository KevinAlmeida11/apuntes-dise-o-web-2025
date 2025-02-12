# unidades de medidas en css:px,%,em,rem

## pixel
son unidades absolutas que representan un punto en pantalla.Son ideales para tamaños y dimensiones precios que no deben cambiar en ralacion con otros elementos.Es recomendable usarlos para bordes,imagenes y otro elementos de dimension fija.

## porcentaje "%"
Es una relativa al tamaño del elemento padre.Ej:el padre es de 200px y el elemento tiene un width de 50%,el ancho del objeto sera de 100 px.Esta medida es util para diseños fluidos y responsive que se adapten al tamaño de pantalla.Es recomendable para contenedoresque varian segun su contenedor.

## EM "em"

la unidadd "em" es relativa al tamaño de la fuente del elemento padre(o el suyo).Por ejemplo si el padre tiene `font-size:10px;`, y un `margin:3em;`el margen sera de 30px.Esta unidad es útil para crear tamaños de texto y márgenes que escalen con el tamaño de la fuente.
Esto mejora la accesibilidad y flexibilidad del diseño.
por defecto los navegadores asignan el font-size inicial a 16px.

```css


.card{
    font-size: 1em;  /* 16px */
    padding: 1.5em;   /* 24px */
}
```

## REM(root EM)
    Es relativa al tamaño de l a fuente de la RAIZ del documento(normalmente es <html>).Por ejemplo,si cel tamaño de la fuente del HTML es de 8px,y un elemento descendente en varios niveles tiene una medida de "3 rem" su medida será de: "24px;".Rem es util para mantener una escala consistente en todo el documento,independientemente de la estructura del DOM.Es recomendadble usar REM para tamaños globales,como el tamaño de la fuente principal y los margenes,para garantiaar coherencia en todo el sitio.

```css

html {
    /* valor por defecto */
    font-size: 16px;
    }

.card{
    font-size:2em;/* 32px */
}
.card__title {
    /* el rem*/
    font-size:rem;/* 16px */
}