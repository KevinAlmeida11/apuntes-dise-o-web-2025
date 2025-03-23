const listaBloques = document.querySelectorAll("#bloque");
const listaImagenes = document.querySelectorAll(".imagen");



listaBloques.forEach((bloque, idx) => {



    listaBloques[idx].addEventListener("mouseenter", () => {


        listaBloques.forEach((bloque) => {

            bloque.style.color = "gray";
        })

        bloque.style.color = "white";
    
        document.body.style.backgroundImage = `url('${listaImagenes[idx].src}')`;

        document.body.style.transition = "background 0.8s ease";



    });
})
