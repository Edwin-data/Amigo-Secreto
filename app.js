// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Agrega un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el valor del input y eliminar espacios en blanco al inicio y final
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Añadir el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el input y darle foco
    inputAmigo.value = '';
    inputAmigo.focus();
    
    // Actualizar la lista visual de amigos
    actualizarListaAmigos();
    
    // Limpiar el resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';
}

/**
 * Actualiza la lista visual de amigos en el DOM
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Si no hay amigos, mostrar mensaje
    if (amigos.length === 0) {
        listaAmigos.innerHTML = '<li class="empty-message">No hay amigos añadidos aún</li>';
        return;
    }
    
    // Añadir cada amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';
        listaAmigos.appendChild(li);
    });
}

/**
 * Realiza el sorteo del amigo secreto
 */
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Verificar que haya amigos añadidos
    if (amigos.length === 0) {
        alert('Debes añadir al menos un amigo para realizar el sorteo');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    resultado.innerHTML = '';
    const resultadoItem = document.createElement('li');
    resultadoItem.className = 'result-item';
    
    const resultadoTitulo = document.createElement('h3');
    resultadoTitulo.textContent = '¡Tu amigo secreto es!';
    resultadoTitulo.className = 'result-title';
    
    const resultadoNombre = document.createElement('p');
    resultadoNombre.textContent = amigoSeleccionado;
    resultadoNombre.className = 'result-name';
    
    resultadoItem.appendChild(resultadoTitulo);
    resultadoItem.appendChild(resultadoNombre);
    resultado.appendChild(resultadoItem);
    
    // Scroll hacia el resultado
    resultado.scrollIntoView({ behavior: 'smooth' });
}

// Añadir event listener para usar la tecla Enter en el input
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Inicializar la lista de amigos vacía
    actualizarListaAmigos();
});