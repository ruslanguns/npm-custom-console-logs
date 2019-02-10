module.exports = {
    ok,
    info,
    error,
    aviso,
    mensajeBienvenida
};

function ok(mensaje) {
    const estilos = 'background-color: green; color: white; font-size: 25px; display: block; text-align: center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);

}

function info(mensaje) {
    const estilos = 'background-color: blue; color: white; font-size: 25px; display: block; text-align: center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);

}

function error(mensaje) {
    const estilos = 'background-color: red; color: white; font-size: 25px; display: block; text-align: center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);

}

function aviso(mensaje) {
    const estilos = 'background-color: yelow; color: red; font-size: 25px; display: block; text-align: center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);
}

function mostrarLog(mensaje, estilos) {
    console.log('%c%s', estilos, mensaje);
}

function mensajeBienvenida() {
    return 'Hola !!!';
}