import { describe, it, test } from "vitest";

describe("mathOperations", () => {
  test("Hola", () => {
    console.log("Hola");
  });

  test.skip("Should print hello", () => {
    console.log("Hola");
  });

  it.todo("Should create a test", () => {
    console.log("Hola");
  });

  test.fails("Should fail", () => {
    console.log("Hola");
  });

  test.only("Only run this test", () => {
    console.log("Hola");
  });

});