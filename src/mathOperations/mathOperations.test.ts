import { describe, expect, test } from 'vitest';
import { add, subtract, multiply, divide, subtract2 } from './mathOperations';



describe("math operation", () => {
    test("should print a console log", () => {
        console.log("This is a console log");
        const result = add(2, 3);
        expect(result).toBe(5);
    });

    test("should add two numbers", { tags: ['frontend'] }, () => {
        const result = add(5, 9);
        expect(result).toBe(14);
    });

    test("should subtract two numbers", { tags: ['backend', 'db'] }, () => {
        const props = { a: 10, b: 4 };
        const result = subtract2(props);
        expect(result).toBe(6);
    });

    test("should multiply two numbers", () => {
        const result = multiply(3, 4);
        expect(result).toBe(12);
    });

    test("should multiply by zero and return zero", () => {
        const result = multiply(5, 0);
        expect(result).toBe(0);
    });

    test("should divide two numbers", () => {
        const result = divide(10, 2);
        expect(result).toBe(5);
    });

    //test("should return Infinity when dividing by zero", { tags: ['db'] }, () => {
    //    expect(() => divide(8, 0)).toThrow("Cannot divide by zero.");
    //});
});