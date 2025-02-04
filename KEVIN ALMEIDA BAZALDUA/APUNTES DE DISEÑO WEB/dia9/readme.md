
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

<style>
    .card{

    }
    .card__header{}
    .card__content{}
    .card__footer{}

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
