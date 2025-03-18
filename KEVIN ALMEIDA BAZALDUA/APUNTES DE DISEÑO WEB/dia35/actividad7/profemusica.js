
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones=document.getElementById("containerCanciones")

const canciones = [
    {
        id: 1,
        titulo: "Canción 1",
        artista: "Artista 1",
        imagen: "img/img1.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        id: 2,
        titulo: "Canción 2",
        artista: "Artista 2",
        imagen: "img/img2.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        id: 3,
        titulo: "Canción 3",
        artista: "Artista 3",
        imagen: "img/img3.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        id: 4,
        titulo: "Canción 4",
        artista: "Artista 4",
        imagen: "img/img4.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        id: 5,
        titulo: "Canción 5",
        artista: "Artista 5",
        imagen: "img/img5.jpg",
        fuente: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

];

//--------------NAVEGACION--------------//


listaButtons.forEach((button, idx) => {


    listaButtons[idx].addEventListener("click", () => {
        //obtenemis el ID del Target que quiero mostrar!
        const target = button.getAttribute('data-tab');

        //actualizar la visibilidad de los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove('active');
            //si el bloque es el que me interesa,agregar active
            if (bloque.id == target) {
                bloque.classList.add("active")
            }
        });

        //actualizar el boton activo de navegacion

        listaButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

//---------------LISTAR TEMAS--------------//

listaTemas.forEach(tema=>{
    //decosntruccion del objeto "tema"

    const { id,titulo,artista,imagen,fuente}=tema;
    console.log(titulo);
})

//usamos innerHTML para crear nuestros temas
containerCanciones.innerHTML+=`<li class="cardCancion"> 
                    <img src="./img/tema1.jpg" alt="Mickael Jackson"> 
                    <div> 
                         <h2>Wanna Be Startin 'Somethin'</h2> 
                        <small class="artista"></small> 
                </div> 
                </li> `


//---------------REPRODUCTOR-----------------//
