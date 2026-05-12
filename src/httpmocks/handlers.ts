import { graphql, http, HttpResponse, passthrough } from "msw";
// Construir nuestro request handler
export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Montshe",
    });
  }),

  http.get<{ id?: string }>("/books/:id", ({ params }) => {
    if (params.id === "123-abc") {
      return new HttpResponse(
        { error: "Unauthorized access" },
        { status: 401 },
      );
    }

    return HttpResponse.json({
      id: params.id,
      title: "The Lord of the Rings",
    });
  }),

  http.get("/resources", async ({ request }) => {
    const data = await request.clone().json();

    if (data?.id === "123-abc") {
      return HttpResponse.json({ id: "123" });
    }
    return passthrough();
  }),

  http.get("/api/user", ({ cookies }) => {
    if (!cookies.authToken) {
      return new HttpResponse(null, { status: 403 });
    }
    return HttpResponse.json({ name: "Pablo" });
  }),

  graphql.query("ListMovies", () => {
    return HttpResponse.json({
      data: {
        movies: [{ title: "Harry Potter" }, { title: "Star Wars" }],
      },
    });
  }),
];
