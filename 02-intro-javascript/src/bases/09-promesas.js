//URL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
import { getHeroeById } from './bases/08-imp-exp'


// const promesa = new Promise((res, rej) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         res(heroe);
//         rej('Heroe no encontrado');
//     }, 2000);
// });

// promesa.then((h) => {
//     console.log(h);
// })
//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe)
                res(heroe)
            else
                rej('Heroe no encontrado');
        }, 1000);
    });
};

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);