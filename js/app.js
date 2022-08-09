// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargaEventListeners();

function cargaEventListeners() {
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// Funciones

function agregarCurso(evento) {
    evento.preventDefault();
    if ( evento.target.classList.contains('agregar-carrito') ){
        console.log(evento.target)
    }
};