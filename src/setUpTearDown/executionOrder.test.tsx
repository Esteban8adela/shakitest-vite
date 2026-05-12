// Generar codigo para probar el orden de ejecucion de
// beforeEach, afterEach, beforeAll y afterAll en Vitest
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest";

beforeAll(() => {
    console.log("beforeAll, se deberia de correr antes de todo")
});

afterAll(() => {
    console.log("afterAll, se debe de correr despues de todo alv")
});

beforeEach(() => {
    console. log('beforeEach 0, este esta afuera de describe, se correria antes de cada test en el archivo')
});

afterEach(() => {
    console.log('afterEach 0, este esta afuera de describe, se correria despues de cada test en el archivo')
})

describe('Probando el roden de ejecucion', () => {
    beforeEach(() => {
        console.log('beforeEach 1, este esta adentro de describe, se correria antes de cada test en el describe');
    });
    
    afterEach(() => {
        console.log('afterEach 1, este esta adentro de describe, se correria despues de cada test en el describe');
    });

    test('test 1', () => {
        console.log('test 1, este es el primer test');
        expect(true).toBe(true);
    });
});

describe('Probando el roden de ejecucion 2', () => {
    beforeEach(() => {
        console.log('beforeEach 2, este esta adentro de describe 2, se correria antes de cada test en el describe 2');
    });
    
    afterEach(() => {
        console.log('afterEach 2, este esta adentro de describe 2, se correria despues de cada test en el describe 2');
    });

    test('test 2', () => {
        console.log('test 2, este es el segundo test');
        expect(true).toBe(true);
    });
});