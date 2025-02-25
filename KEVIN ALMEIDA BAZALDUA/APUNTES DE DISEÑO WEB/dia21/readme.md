# variables en Css

se pueden crear variables de css para reutilizar valores en diferentes partes del codigo.

-mejora la legibilidad del codigo.
-facilita la actualizacion de valores.

se suelen crear de manera global en la raiz del documento,en eweb el root es la etiqueta <html>,en svg es la etiqueta <svg>,adremas tiene mayor especificidad ":root" que "html".

[Ejemplo Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variables)

```css

:root{
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --mi-color-primcipal:#fff;
  --mi-color-secundario:#000;
  --mi-bg-principal:#000;
  --mi-bg-secundario:#000;

}