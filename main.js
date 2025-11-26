// Add JS here
document.addEventListener("DOMContentLoaded", function(){
    const p = document.getElementById("saludo");
    p.textContent = "Hola Mundo";
})

document.addEventListener('click', () => {
    const boton1 = document.getElementById("cambiar");
    const p = document.getElementById("saludo")
    p.textContent = "Texto Nuevo";
})

const listatareas = {
    materia : "matemáticas",
    dia : "lunes",
    acts : ["logaritmos", "exponenciales", "ecuaciones"],
    estado : "pendiente",
}
function lista(listatareas) {
    console.log("dìa de la entrega: ",listatareas.dia);
    console.log("materia: ",  listatareas.materia);
    console.log("estado de la actividad: ", listatareas.estado);
    console.log("actividades pendientes: ", listatareas.acts);
}

document.addEventListener("mouseover", function() {
    const p = document.getElementById("saludo");
    p.style.color = 'red';
})

document.addEventListener("mouseout", function() {
    const p = document.getElementById("saludo");
    p.style.color = 'black';
})

const pelicula = {
    titulo : "Caramelo",
    año : 2025,
    vista : true,
}

function visto(pelicula) {
    const pv = document.getElementById("peli");
    pv.textContent = 'La pelìcula ', pelicula.titulo, ' (', pelicula.año, ') ha sido vista: ', pelicula.vista;
}

document.addEventListener('click', () => {
        const boton2 = document.getElementById("sumar");
            boton2++;
                const p = document.getElementById("contador");
                    p.textContent = boton2;
                    }
})