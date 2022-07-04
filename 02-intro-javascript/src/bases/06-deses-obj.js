// Desestructuración
// Asignación Desestructurante
// URL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Daniel',
    edad: 32,
    clave: 'mSk',
};

// const { edad, clave, nombre, } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usContext = ({ nombre, clave, edad, rango = 'Admin' }) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.515,
            lng: -12.515
        }
    }
};

const { nombreClave, anios, latlng: { lat, lng } } = usContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);