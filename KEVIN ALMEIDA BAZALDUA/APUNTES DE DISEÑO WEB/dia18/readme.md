# transition css
es una forma de cambiar los valores de una o mas propiedades de manera y manera suave y gradual.Se pueden aplicar transicione a cualquier propiedad que acepte valores numericos o de color.
Por ejemplo:width,height,padding,color,background-color,opacity,etc.

propiedades numericas:
-font-size
-margin
-border-width
-transform (prop como:scale,rotate,translate,etc,..)


propiedades de color:
-background-color
-color
-border-color
-box-shadow


## como se define

utilizamos la propiedad `transition`y se puede personalizar de la siguiente manera:

-`transition-property`:nos indica la propiedad de animar.
-`transition-duration`:duracion de la animacion (en seg).
-`transition-timing-function`:la manera en quese va a llevar a cabo la nimacion.
-`transition-delay`:demora antes de iniciar la transicion.

```css
div{
transition-property:font-size;
transition-duration:4s;
transition-timing-function: ease-in-out;
transition-delay: 2s;

/* podemos unificar estas 4 reglas en 1 */
/* prop duration timing-function delay */

transition:font-size 4s ease-in-out 2s
}
```


## timing functions

-`ease`:velocidad lenta-rapida-lenta(por defecto)
-`linear`:velocidad constante
-`easy-in`:lento-rapida
-`easy-out`:rapida-lenta
-`ease-in-out`:lenta-rapida-lenta(mas brúsca).
-`cubic-bezier()`:timing personalizado.