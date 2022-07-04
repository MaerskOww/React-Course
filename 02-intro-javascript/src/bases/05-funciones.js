// Funciones en JS

const saludar = (n) => {
    return `Hola ${n}`;
}

const saludar2 = (n) => `Hola ${n}`;

console.log(saludar('Daniel'));
console.log(saludar2('Daniel'));

const getUser = () =>
({
    uid: 'ABC123',
    userName: 'MaerskOw'
});

console.log(getUser());

const getUsuarioActivo = (n) => ({
    uid: 'ABC456',
    userName: n
});

const usuarioActivo = getUsuarioActivo('Daniel');
console.log(usuarioActivo);