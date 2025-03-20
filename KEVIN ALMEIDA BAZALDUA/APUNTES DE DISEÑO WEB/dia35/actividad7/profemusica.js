
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones=document.getElementById("containerCanciones")

let idCancionActual=0;

const listaTemas = [
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
});

//usamos innerHTML para crear nuestros temas
containerCanciones.innerHTML+=`<li class="cardCancion" data-id=${id}> 
                    <img class="imgCancion"src="./${imagen}" alt="${artista}"> 
                    <div> 
                         <h2 class="titleCancion">${titulo}'</h2> 
                        <small class="artistaCancion">${artista}</small> 
                </div> 
                </li> `;

//agarrar el ultimo hijo agregado para incluirle un eventLsitener

const cardCancion=containerCanciones.lastChild;
console.log("card:",cardCanciones);
console.log(titulo);

cardCancion.addEventListener("click", ()=>{
    cargarCancion(id);

    //opcional:pasar a la pestaña de reproducion
    document.querySelector("[data-tab='tab3']").click();
});



//---------------REPRODUCTOR-----------------//
const playBtn=document.querySelector(".fa-play");
const pauseBtn=document.querySelector(".fa-pause");
const nextBtn=document.querySelector(".fa-step-forward");
const prevBtn=document.querySelector(".fa-step-backward");
const audioPlayer=document.querySelector("#audioPlayer");//nuestro reproductor

const divCurrentSongInfo=document.querySelector(".current-song-info");

pauseBtn.style.display="none";


//funcion para cargar un tema
function cargaCancion(id){
    //recorremos nuestras canciones y obtenemos solo la que me interesa

    const cancion=listaTemas.find(tema.id==id);

    if(!cancion){return;}

    //deconstruccion de objetos para obtener sus variables
    const {titulo,imagen,artista,fuente}=cancion;

    console.log(cancion);
    audioPlayer.src=cancion.fuente;
    idCancionActual=id;

divCurrentSongInfo.innerHTML=

                <img src="./${imagen}" alt="${artista}" style="width:200px"></img>
                
    


    audioPlayer.play();
    playBtn.style.display="none";
    pauseBtn.style.display="inline";
}

//Event listener de botones de reproductor
playBtn.addEventListener("click",()=>{});


nextBtn.addEventListener("click",()=>{
    posicionTemaActual++;
    console.log("Posicion es:", posicionTemaActual)
    const idCancion=listaTemas[posicionTemaActual].id;
    cargarCancion(idCancion);
});