const LOG = require('./../index');

var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);
const MENSAJE = 'Hola, estamos en el curso de NPM';

describe('Test de las funciones', () => {

    beforeEach(function() {
        sinon.spy(console, 'log');
    });

    afterEach(function() {
        console.log.restore();
    });

    it('Función ok()', () => {
        LOG.ok(MENSAJE);
        expect(console.log).to.be.called;
    });

    it('Función info()', () => {
        LOG.info(MENSAJE);
        expect(console.log).to.be.called;
    });

    it('Función aviso()', () => {
        LOG.aviso(MENSAJE);
        expect(console.log).to.be.called;
    });

    it('Función error()', () => {
        LOG.error(MENSAJE);
        expect(console.log).to.be.called;
    });

    it('No llama al console log', () => {
        LOG.mensajeBienvenida();
        expect(console.log).not.to.be.called;
    });

});