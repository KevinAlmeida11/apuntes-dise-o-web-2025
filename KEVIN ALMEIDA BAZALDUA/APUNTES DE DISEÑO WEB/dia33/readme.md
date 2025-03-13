# Activida Music Player

1. crear un array con 5 canciones,recorrer el array y mostrar en consola cada cancion.
"https:www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

2. crear un array con 5 artistas,cada artista correspondera a su cancion.
3. mostrar en html un div para cada cancion y artista,generados con JS.
4. Crear un boton con el texto "Tema3" que al hacer clik muestre en consola el nombre de la cancion y el artista en la posicion 2.
5. agregar  botones de "siguiente","anterior","play","pausa" cpm id`s unicos y agrenguele el siguiente JS:
```js
documente.addEvenListener("click",(e)=>{
    console.log(event.target.id);
})
```

explicar que hace ese codigo

6. agregar un atributo ID as cada elemento generado en el punto 3,y hacer que al hacer clickear cada DIV muestre en consola el nombre de la cancion y el artista.
7. Actualizar el punto anterior para mostrar en el html un parrafo con el nombre de la cancion y el artista al que le hicieron click.
8. Agregar un Array con imagenes para cada cancion.
9. Darle la funcion necesaria a los botones de siguiente/anterior para que pase de cancion mostrando su correspondiente html.
10. convertir los 3 arrays en un array de objetos, y que el programa siga funcionando.