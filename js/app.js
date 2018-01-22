//Metodo cargar jQuery
$(document).ready(loadPage);


//Mandar elementos HTML al Js
var $inputSearcher = $("#bar-seacher");

// Función base de las funciónes
function loadPage(){
    loadSplashView(); //Activa la función del splash
    loadMainView(); //Activa la función del main
    $('#bars-container').append(datamap.map(getBarsInHtml));
    $filterInput.keyup(filterBars)//Se activa al presionar una vez una tecla
}

//función para el splash
function loadSplashView() {
    //Definición del tiempo de activación del splash
    setTimeout(function() {
        $("main").fadeIn(1500);
    }, 3000);
}

//función para mostrar contenedor de opciones de bares, acabando el splash
function loadMainView(){
    setTimeout(function() {
        $("main").fadeIn(1500);
    }, 3000);
}

//función de mostrar "las opciones filtradas"
function getBarsInHtml(bar){

//nombramiento de variables
var nameBar = bar.nombre;
var imgBar = bar.img;
var $nearbyBar = $('section />');

}
