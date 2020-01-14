// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
var assert = require('assert');

describe('Hello function', () => {
    it('should return hello world', () => {
        const teste = require('../dist/index.js');
        assert.equal(teste.sayHello(), true);
        // expect(teste.sayHello()).to.equal('hi');
    });
});