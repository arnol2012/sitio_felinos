// let confirmarCambios = confirm('¿Quieres cambiar a modo nocturno?');
// if (confirmarCambios) {
//     let oscuro = document.querySelector('body');
//     oscuro.style.backgroundColor = 'red';

   
// }

let dark = document.querySelector('body');

let confirmDark = confirm('Quieres activar el modo nocturno');

if (confirmDark) {
    dark.classList.add('dark');
    dark.classList.add('otroDark')
}



// window.addEventListener("load", function() {
//     this.alert(1);

// })


