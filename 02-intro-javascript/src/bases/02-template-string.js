const nombre = 'Daniel';
const apellido = 'Guasamucaro';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

const getSaludo = (nombre) =>{
    return 'Hola Mundo ' + nombre;
};

console.log(`Este es un texto ${getSaludo(nombre)}`);