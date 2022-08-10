// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargaEventListeners();

function cargaEventListeners() {

    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina elemntos del carrito
    carrito.addEventListener('click', eliminarCurso)
};

// Funciones

function agregarCurso(evento) {
    evento.preventDefault();

    if ( evento.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = evento.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
};

// Elimina elemntos del carrito

function eliminarCurso(evento) {
    //console.log(evento.target.classList);
    if(evento.target.classList.contains('borrar-curso')){
        const cursoId = evento.target.getAttribute('data-id');

        // Elimina del arreglo articulosCarrito por el Id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)

        console.log(articulosCarrito);
    }
}

// Lee el contenido HTML al que le damos click y lo usa en el carrito

function leerDatosCurso(curso) {
    //console.log(curso);

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if (existe) {
        // Actualiza la cantidad
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // esto retorna el objeto actualizado
            } else {
                return curso; //esto retorna objetos no duplicados
            }

        });
        articulosCarrito = [...cursos];

    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    //Agregar elemento al arreglo vacio (articulosCarrito)
   //articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);
    carritoHTML();

}

// Muestra el carrito de compras en el HTML

function carritoHTML() {

    // Limpiar HTML
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach ( (curso) => {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src ='${curso.imagen}' width ="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href ="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>        
        `;
        // Agregar el HTML del carrito en tbody
        contenedorCarrito.appendChild(row);
    });
};

//Elimina los cursos del tbody

function limpiarHTML() {

    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
};