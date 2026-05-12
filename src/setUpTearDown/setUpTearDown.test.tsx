import { afterEach, beforeEach, describe, expect, test } from "vitest";

describe("Practicing setup and teardown", () => {
  let items: string[];
  beforeEach(() => {
    items = ["pan", "arroz", "leche"];
  });
  afterEach(() => {
    items = [];
  });

  test("can add items to the list", () => {
    items.push("fresas");
    expect(items).toHaveLength(4);
    console.log("items 4", items);
  });

  test("Items startd with 3 items", () => {
    expect(items).toHaveLength(3);
    expect(items.length).toBe(3);
    console.log("items 3", items);
  });
});
