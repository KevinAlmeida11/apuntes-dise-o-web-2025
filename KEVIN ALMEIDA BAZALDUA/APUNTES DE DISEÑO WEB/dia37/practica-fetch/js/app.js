//--------------------------------------------------------
//PARTE 1:declaramos nuestras variables  y referencias del DOM
//--------------------------------------------------------
const cargarBtn = document.querySelector("#cargarBtn");
const limpiarBtn = document.querySelector("#limpiarBtn");
const filtraBtn = document.querySelector("#filtrarBtn");

const spinner = document.getElementById("spinner");
const perfilContainer = document.getElementById("perfiles");
const errorContainer = document.getElementById("error");
const errorText = document.getElementById("errorText");
const listaUsuarios = [];
//--------------------------------------------------------
//PARTE 2:FUNCIONES Y EVENT LISTNERS
//--------------------------------------------------------

//funcion para mostrar/ocultar spinner
const toggleSpinner = (visible) => {
    //spinner.classList.toggle("hidden");
    if (visible == "on") {
        spinner.classList.add("hidden");
    } else {
        spinner.classList.remove("hidden");
    }
}

//funcion para mostrar error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    errorContainer.classList.remove("hidden");
}

//funcion para ocultar error
const ocultarError = () => {
    errorContainer.classList.add("hidden");
}

const mostrarDatos=(datos)=>{
    //imprimir en pantalla las tarjetas de usuarios
}


const cargarDatos = () => {
    //hacer el fetch acá!!
    fetch("./db/datos.json")
        .then(response =>response.json())
        .then(data=>{
            console.log("tus datos de la DB son:",data);
            //llamar a la funcion de mostrar datos
            mostrarDatos(data);
        })
        .catch(e=>{
            console.warn("tuvimos un error obteniendo los datos");
        });
       
}



cargarBtn.addEventListener("click", cargarDatos)
//--------------------------------------------------------
//PARTE 3:Código de nuestra app
//--------------------------------------------------------

mostrarError("CUIDADO ESTAS POR ROMPER TODO");
toggleSpinner("on");
toggleSpinner("off");