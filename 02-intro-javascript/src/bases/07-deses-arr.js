const personajes = ['Goku', 'Vegueta', 'Trunks'];
const [, , p3] = personajes;
// console.log(p3);

const retornaArreglo = () => ['ABC', 123];

const [l, n] = retornaArreglo();
// console.log(l, n);

// Tarea
/* 
    1. Primer valor del arreglo se llamará Nombre
    2. Segundo valor del arreglo se llamará setNombre
*/
const usState = (v) => ([v, () => { console.log('Hola Mundo') }]);
const [nombre, setNombre] = usState('Goku');

console.log(nombre);
setNombre();