// URL: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
import heroes, { owners } from '../data/heroes'


// console.log(owners);

export const getHeroeById = (id) => heroes.find(h => h.id === id);
// console.log(getHeroeById(2));

export const getHeroesByOwner = (o) => heroes.filter(h => h.owner === o);
// console.log(getHeroesByOwner('DC'));
