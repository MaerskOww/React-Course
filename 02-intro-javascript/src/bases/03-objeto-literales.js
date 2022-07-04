const persona = {
    nombre: 'Daniel',
    apellido: 'Guasamucaro',
    edad: 32,
    direccion: {
        ciudad: 'Buenos Aires',
        zip: 1708,
        lat: 14.562,
        lng: 35.621
    }
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Pepe';

console.log(persona);
console.log(persona2);