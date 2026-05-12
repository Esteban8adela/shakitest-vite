import { describe, test, expect } from "vitest";
function generateGreeting(name: string){
    return {
        message: `hello, ${name}!`,
        timestamp: null,
        version: 2,
    };
}

describe("Testing snapshot", () => {
    test("generates a greeting", () => {
        expect(generateGreeting('Jose')).toMatchSnapshot();
    });

    test("generates an inline greeting", () => {
        //Al correr este test, toMatchInlineSnapshot genera el snapshot en el codigo, yo no escribi ese texto
        expect(generateGreeting('Jose')).toMatchInlineSnapshot(`
          {
            "message": "hello, Jose!",
            "timestamp": null,
            "version": 2,
          }
        `);
    });

    test('throws an invalid input', () => {
        const throwError = () => {
            throw new Error("This is an error");
        };
        expect(throwError).toThrowErrorMatchingInlineSnapshot(`[Error: This is an error]`);
    });
});