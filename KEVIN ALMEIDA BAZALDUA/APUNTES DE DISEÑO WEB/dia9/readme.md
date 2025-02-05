
Hacer un `login-form.html` sin estilos enviando informacion el atributo action="#".y metodo GET.Utilicen "labels" y que el usuario y clave sean obligatorios.

Investigar los siguientes types,explicar que hacen,y crear un ejemplo `otros-inputs.html`.
"number,color,date.file,reset,hidden,range".

"Number,color,date,file,reset,hidden,range".

esto es solo para cuando tenemos un formulario que haceupload/carga de archivos.

<form method="POST" enctype="multipar/form-data">
    <input type="file">
</form>

-nuevas etiquetas/tipos:tel,url,search,time,week,month,datetime-local.

# Introducción a Nomenclaturas CSS Y BEM

Forma de nombrar nuestras clases CSS para mantener codigo limpio y ordenado.Buscamos codigo comprensible,predecible y facil de mantener.

# Nombres de variables/selectores/archivos

-UPPERCASE:TODO EN MAYUSCULAS
-lowercase:todo en minusculas.
-Title Case
-camelCase: `miClaseDeHtml`
-PascalCase:`MiClaseDeHtml`
-kebab-case:`mi-clase-de-html`(se utilizan para nombrar archivos)
-snake_case:`mi_clase_de_html`

## Nomenclatura BEM (Block-Element-Modifier)

-[BEM](https://getbem.com/naming)

## para que?
1. comunicar un proposito o funcion.
2. comunicar la estructura del componente.
3. marca una especificidad baja consistencia.

[specificity](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkerupv5p9lu9k10w5l1.png)

su nombre es en "kebab-case" separando__para elementos y -- para modificadores.

Ejemplo:

.[bloque]__[elemento]--[modificador]

el nombre de clase BEM posee 3 partes:

1. **Bloque**:el nombre del componente,el cual por si solo tiene sentido:card,header,container,button,footer,menu.
2. **Elementos**:dentro de un bloque que puede haber uno o mas elemntos.Estas partes no tienen sentido por si solos:"menu item","list item",checkbox label","header title"
3. **Modificadores**:Una variacion o estado diferent para un bloque o elemnto.que cambia la apariencia o comportamiento del mismo. "xmas",disable,highlighted,checked,size big,"color yellow".no olvidemos que si adgregamos un modificador,la etiqueta debe tambien incluir el nombre del elento o bloque.
eje:<div class="footer footer-red"></div>

   

<style>

    /*usando BEM*/
    .card{

    }
    .card__header{}
    .card__content{}
    .card__footer{}
    /*sin utilizar metodologia*/
    form input{}
    .form__input{}


    form input #item1 .card{
        color:red
    }

   form{
    color:
    }
    div{}

 </style>



<div class="card">
    <div class="card__header">Cabecera de la Tarjeta</div>
    <div class="card__content">contenido</div>
    <div class="card__footer">footer/pie de la Tarjeta</div>

</div>

<div class="sidebar">
    <h1 class="sidebar__tittle">Título
    </h1>
    <ul class="lista">
        <li class="lista__item">
            <a class=">
    <div class="card__content">contenido</div>
    <div class="card__footer">footer/pie de la Tarjeta</div>

</div>
