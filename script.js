//FUNCION QUE APLICA EL ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITA LA PREVIAMENTE SELECCIONADA
function seleccionar(link){
    var opciones = document.querySelectorAll('#link a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //HACEMOS DESAPARECER EL MENU UNA VEZ SELECCIONADA UNA OPCION EN EL MENU RESPONSIVE
   var x = document.getElementById("nav");
   x.className = ""; 

};
//FUNCION QUE MUESTRA EL MENU RESPONSIVE
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
};

//DETECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE HABILIDADES

window.onscroll = function(){
    efectoHabilidades()
};

//FUNCION QUE APLICA LA ANIMACION DE LA BARRA DE HABILIDADES

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 100){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("Js").classList.add("barra-progreso2");
        document.getElementById("Ps").classList.add("barra-progreso3");
        document.getElementById("Wf").classList.add("barra-progreso4");
        

    }
}
