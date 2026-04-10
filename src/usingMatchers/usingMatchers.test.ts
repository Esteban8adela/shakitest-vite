import { expect, test, describe } from 'vitest';
import { objData, fetchData } from '../mockData';

describe('learning common matchers', () => {
    test('Comparing objects', () => {
        // toBe for primitives
        // toEqual for objects and arrays, duples, sets, maps, etc

        const temp = { name: 'Jose', age: 21 };
        expect(objData).toEqual(temp)
        //expect(objData).toBe(temp)
    });

    test('Number Comparisons', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3);
        expect(value).toBeLessThanOrEqual(4);
        expect(value).toBeLessThan(5);
        expect(value).toBe(4);
    })

    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3); // This won't work because of rounding error
        expect(value).toBeCloseTo(0.3, 3); // This works.
    })

    test('There is no I in team', () => {
        //expect('team').toMatch(/I/); // This won't work because there is no "I" in "team"
        expect('team').not.toMatch(/I/);
    })

    test('version string matches format', () => {
        expect('vitest@1.0.0').toMatch(/vitest@\d+\.\d+\.\d+/);
    })

    test('null checks', () => {
        const n = null;
        const und = undefined;

        expect(n).toBeNull(); //toBe(null)
        expect(und).toBeUndefined();
        expect(n).toBeFalsy();
        expect(und).toBeFalsy();
        expect(n).toBeNullable();
        expect(und).toBeNullable();

    })

    test('Check endpoint', () => {
        expect(fetchData.name).toBe('Jose'); // Funciona pero es incorrecto
        expect(fetchData).toMatchObject({ // Mejor forma
            name: 'Jose'
        });
        expect(fetchData).toHaveProperty('name'); // Solo verifica que la propiedad exista, no su valor
        expect(fetchData).toHaveProperty('name', 'Jose'); // Verifica que la propiedad exista y tenga el valor esperado
    })

    test('The shopping list has milk on it', () => {
        const shoppingList = [
            'diapers',
            'kleenex',
            'trash bags',
            'paper towels',
            'milk'
        ];

        expect(shoppingList).toContain('milk');
    })

});

