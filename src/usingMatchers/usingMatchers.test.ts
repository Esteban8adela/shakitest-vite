import { expect, test, describe } from 'vitest';
import { objData } from '../mockData';

describe( 'learning common matchers', () => {
    test('Comparing objects', () => {
        // toBe for primitives
        // toEqual for objects and arrays, duples, sets, maps, etc
        const temp = { name: 'Jose', age: 21 };
        expect(objData).toEqual(temp)
        //expect(objData).toBe({temp})
    });

    test('Number Comparisons', () => {
        const value = 2+2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3);
        expect(value).toBeLessThanOrEqual(4);
        expect(value).toBeLessThan(5);
        expect(value).toBe(4);
    })

    test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3); // This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
    })

});

