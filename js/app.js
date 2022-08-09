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

    if ( evento.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = evento.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
};

// Lee el contenido HTML al que le damos click y lo usa en el carrito

function leerDatosCurso(curso) {
    console.log(curso);

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };
    
    console.log(infoCurso);

}