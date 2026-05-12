import { afterAll, beforeAll, expect, test } from "vitest";

let db;
const connectToDatabase = async () => {
  // Simulate database connection
  return {
    query: async (sql: string) => {
      // Simulate database query
      if (sql === "SELECT * FROM users") {
        return [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ];
      } else if (sql === "SELECT * FROM products") {
        return [
          { id: 1, name: "Laptop" },
          { id: 2, name: "Phone" },
        ];
      }
      return [];
    },
    close: async () => {
      // Simulate closing database connection
    },
  };
};
beforeAll(async () => {
  db = await connectToDatabase();
});
afterAll(async () => {
  await db.close();
});

test("can query users", async () => {
  const users = await db.query("SELECT * FROM users");
  expect(users.length).toBeGreaterThan(0);
});

test("can query products", async () => {
  const products = await db.query("SELECT * FROM products");
  expect(products.length).toBeGreaterThan(0);
});
