import { describe, it, expect } from "vitest";
import { buildApp } from "./app";

describe("health", () => {
  it("GET /health -> { ok: true }", async () => {
    const app = await buildApp();
    const res = await app.inject({ method: "GET", url: "/health" });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ ok: true });
    await app.close();
  });
});
