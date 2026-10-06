const btnContacto = document.getElementById("btnContacto");

const modalContacto = document.getElementById("modalContacto");

const cerrarModal = document.getElementById("cerrarModal");

const aceptarModal = document.getElementById("aceptarModal");

const anio = document.getElementById("anio");

btnContacto.addEventListener("click", () => {
  modalContacto.classList.add("activo");
}
);

cerrarModal.addEventListener("click", function (){
    modalContacto.classList.remove("activo");
});

aceptarModal.addEventListener("click", function (){
    modalContacto.classList.remove("activo");
});

modalContacto.addEventListener("click", function (evento){
    if(evento.target === modalContacto){
        modalContacto.classList.remove("activo");
    }
});

document.addEventListener("keydown", function (evento){
    if(evento.key === "Escape"){
        modalContacto.classList.remove("activo");
    }
});

anio.textContent = "© " + new Date().getFullYear() + " CamisasStyle. Todos los derechos reservados.";
