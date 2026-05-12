import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./src/httpmocks/node.ts";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
