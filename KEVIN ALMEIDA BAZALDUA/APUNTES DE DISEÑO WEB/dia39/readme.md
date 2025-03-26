# PARALLAX

Uso de parallax con Css:
```css
.parallax{
    background-image:url('imagen.jpg');
    height:500px;
    background-attachment:fixed;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

}
```
uso de parallax con js

```js

window.addEventListener('scroll',()=>{
    //mostrar cuanto he scrolleado
    console.log('Scroll Y:',window.scrollY);
});
```

## Prefers-reduce-motion media query

los usuarios pueden activar en sus dispositivos la preferencia de reduce motion.
- win:config->accesibilidad->mostrar animaciones en windows
- mac:pref sistema->accesibilidad->mostrar->reducir movimientos
- ios: config->accesibilidad->movimiento->reducir movimiento
- android: config->accesibilidad->eliminar animaciones


para css usamos media queries
```css
@media (prefers-reduced-motion: reduce){

.parallax-bg{
    background-attachment:scroll;
}
}
```

para js usamos windows.macthMedia
```js
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    //no aplicar efectos
    console.log("no aplicar parallax por decision del usuario")
}else{
    //aplicar efectos parallax
    console.log("se aplcia el parallax");
    ParallaxEffect();
}
```