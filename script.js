let nombre = "Kurt";

let acerca = document.getElementById("acerca");

let acerca1 = acerca.innerText;

if (acerca1 == "Acerca de mi") {
  acerca.innerText = "Acerca de " + nombre;
} else {
  acerca.innerText = "Falta Actualizar";
}

/* ------------------------------------ ACERCA DE MI ------------------------------------ */

let ciudad = "Lima";
let distrito = "San Bartolo";
let gusto = "comer papitas Jalapeño";

let parrafo = document.querySelector(".parrafo-2");

function cambiarTexto(nombre, ciudad, distrito, gusto) {
  let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en ${distrito} Me gusta ${gusto}. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;
    return contenido;
}

parrafo.innerText=cambiarTexto(nombre, ciudad, distrito, gusto);


/* ---------------------------------------- MENU DESPLEGABLE ------------------------------------ */

let menu_responsive = document.querySelector(".checkbtn");



menu_responsive.onclick=function (){
  navBar=document.querySelector(".menu");
  navBar.classList.toggle("active");
};


function closeNav(){
  let verificacion = document.getElementById("menu");
  let classexiste = verificacion.classList.contains('active');
  
  console.log(classexiste);
  
  if(classexiste){
    navBar=document.querySelector(".menu");
    navBar.classList.toggle("active");
  }
  
}

/* 
let bntnav=document.querySelector(".navbtn");

bntnav.onclick=function(){
  navBar=document.querySelector(".menu");
  navBar.classList.toggle("active");
} */



/* ------------------------------------------- FORMULARIO --------------------------------------------- */

const form= document.getElementById("form");
const nombre_form=document.getElementById("nombre");
const estado=document.getElementById("estado");


function validarFormulario(){
  let mensaje="";
  let valido=true;
  estado.innerHTML="";


  if(nombre_form.value.length<4){
    mensaje += `El nombre debe contener más de 4 caracteres`;
    valido=false;
  }

  if(!valido){
    estado.innerHTML=mensaje;
  }else{
    estado.innerHTML="Enviado";
  }

  return valido;
}

form.addEventListener("submit",(e) =>{
  if(validarFormulario()){
    form.submit();
  }else{
    e.preventDefault();
  }
});