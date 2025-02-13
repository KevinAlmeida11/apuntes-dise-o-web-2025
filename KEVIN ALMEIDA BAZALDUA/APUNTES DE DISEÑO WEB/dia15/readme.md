# css grid

Grid es un sistema de maquetacion bidimensional para crear interfaces y layouts tipo tablas.
se compone de filas y columnas,y se pueden anidar unos de otros.
se puedeb crear layouts complejs con muy pocas lineas de codigo.

-nos sirve para crear layouts.
-No es opuesto a flex,se pueden combinar entre elllos.
-grid si sustituye a las <tables>para el armado de layouts.

Utilizamos `display:grid` para crear un grid y `grid-template-columns`y `grid-template-rows` para definir el numero de columnas y filas.

```css
/* layour de 3x3*/
.container{
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows:100px 100px 100px;
            
}
```
Pueden visualizar el layout de GRID desde la consola de chrome.
Podemos o indicar a cada item,donde posiciionarlo lo usando `grid-row-start`,`grid-row-end`, `grid-column-start` y `grid-column-end`,teniendo en cuenta que las filas y columnas empiezan en 1 y (no en 0).

```css

.item-1{
    grid-column-start:1;
    grid-column-end:4;
    grid-row-star:1;
    grid-row-end:2
    background-color:darkgreen;

}
```
se pueden invertir el start  y el end y funcionara igual.

```css
.item-1{
    grid-column-start:4;
    grid-column-end:1;
    grid-row-star:2;
    grid-row-end:1;
    background-color:darkgreen;

}
```
se pueden utilizar valores negaivos para seleccionar elementos desde el final y de grid.
```css
.item-1{
    grid-column-start:-1;
    grid-column-end:-4;
    grid-row-star:-1;
    grid-row-end:-2;
    background-color:darkgreen;
}
```
en vez de seleccionar la fila o la columna de destino,podemos utilizar "pan" para indicar cuantas filas o columnas queremos que termine en el item.















```css
/* layout de 3x3 */
.container{
    display:flex;
    grid-column-start:100px 100px 100px;
    grid-column-end:100px 100px 100px;
    grid-gap:10px;/* separación entre filas y columnas */
    grid-gap:1em 3em;/* separacion independiente para filas y para columns */
}
````

existe la opcion `repeat()` que nos permite repetir el numero de ves que quiero para una fila o columna.

```css
/* layout de 3x3 */
.container{
    display:grid;
    grid-template-columns:repea;
    grid-template-rows:100px 100px 100px;
    
}
```









tambien existe`grid-auto-flow`que nos permite










las unidade que podemos utilizar son px,%,em,rem,pero se le suma una nueva de valor fraccional,o `fr`.Este valor nos permite fraccionar el tamaño disponible.
por ejemplo tenemos 3 columans y definimos que la primer columna tenga un tamaño de 1fr,la segunda de 2fr y la tercera de 1 fr,la segunda columna ocupara el doble de espacio que la otras 2.
```css
/* layout de 3x3 */
.container{
    display:grid;
    grid-template-columns:1fr 2fr 1fr;
    grid-template-rows:repeat(3,3em);
    grid-gap:10px;
}
````
