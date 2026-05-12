import { describe, test, expect } from "vitest";

describe(" Learning to mock http requests", () => {
  test("responds with the user", async () => {
    const response = await fetch("https://api.example.com/user");
    await expect(response.json()).resolves.toEqual({
      id: "abc-123",
      firstName: "John",
      lastName: "Montshe",
    });
    expect(response.status).toBe(200);
  });

  test("fetches the list of movies", async () => {
    const response = await fetch("https://api.example.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                    query ListMovies {
                        movies {
                            title
                        }
                    }
                        `,
      }),
    });

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      data: {
        movies: [{ title: "Harry Potter" }, { title: "Star Wars" }],
      },
    });
  });
});
