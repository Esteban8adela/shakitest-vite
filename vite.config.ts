import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    tags: [
      { name: "frontend", description: "Tests written for frontend." },
      { name: "backend", description: "Tests written for backend." },
      { 
        name: 'db', 
        description: 'Tests for datbase queries.', 
        timeout: 60_000, 
        priority: 1 
      },
    ]
  },
});