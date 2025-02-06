# que es una Media Query(MQ)

-declaraciones en css que nos permite definir que reglas aplicar a partir de una regla asignada por nosotros.

# Sintaxis de una MQ

UNA MEDIA query se compone de las siguientes partes:
-un@media la cual es una palabra reservada [Keyword]
-un tipo de media(screen,print,all,speech)[MediaType]
-operadores(and,not,only) [Operators]
-Breakpoints una condicion(max-witdh,min-width,etc)
-Un bloque de CSS (nuestras reglas CSS)

```CSS
/* keyword MediaType Operador/es (breakpoint) */
/* @media screen and             (breakpoint){  } */

@media not|or screen and|or (min-width:600px){

    body{
        background-color:lightblue
    }
    h1{
        color:red
    }
}

/* combinar breakpoints (pantallas entre 600 y 800px)*/

@media screen and (min-width:600px)and(max-width:800px){
    body {background-color:lightblue; }
}

/* cuando la pantalla esta horizontal(verticalseria portrait) */

@media screen and (orientation:landscape){
    body {background-color:lightblue; }
}

/* modo oscuro */

@media screen and (prefers-color-schema:dark){
    body {background-color:darkgray;
        color:white
        }
}

```


### Media Types (screen/print)

-all:todos los dispositivos.
print:material de vista previa de imopresion.
screen:pantallas a color(tablets,movil,computadora)

speech:dispositivos de conversion de texto a voz.
otros:pueden aparecer types DEPRECIATED tv,handheld,speech,braile,etc...(no van mas a partir de ccs)

ejemplo de impresion:

```css

@media print{
    .no-te-imprimas{
        display:none !important;
    }
}

```
## tips para utilizarlos

-sobreescriben las reglas de css normales,pero no posee una mayor especificidad por lo tanto la media queries deben estar por debajo de las reglas que quiere reemplazar.
-deben tener el mismo selector para que reemplace las reglas que deseamos.como excepcion podemos utilizar la reglas principales en vez de especificos (background) para reemplazar background-color.
-pensar bien los brakpoints.
-podemos utilizar un @media para cada selector,o una sola para todos los selectores (recomendada)

-Mobile first!!!!!!

## Mobile First
Intentamos desarrollar siemore primero para el movil y luego para pantallas mas grandes.De esta manera nos aseguramos de que se se vea bien en dispositivos móviles.

[2024]https://www.browserstack.com

-Mobile(55%): 320px-480px
-Tablets (2%):768px-1024px
-Desktop(43%):1024x-1920px


```css

/* Mobile First */
/* reglas para Mobile */

/* Tablet */
@media only screen and (min-width:768px){
    /* reglas para tablets */
}

/* desktop */

@media only screen and (min-width:1024px){
    /* reglas para desktop */
}

```
# ejemplo de media queries en imagenes (usando picture)

```html
<picture>
        <source media="(min-width:650px)" srcset="./img/grande.jpg">
        <source media="(min-width:450px)" srcset="./img/mediana.jpg">
        <img src="./img/foto-pequenia.jpg" alt="Mi Mascota">
</picture>
```

