import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import rateLimit from "@fastify/rate-limit";

const app = Fastify({
  logger: true,
});

await app.register(cors, { origin: true });
await app.register(helmet);
await app.register(rateLimit, { max: 100, timeWindow: "1 minute" });

app.get("/health", async () => ({ ok: true }));
app.get("/v1/ping", async () => ({ pong: true }));

const port = Number(process.env.PORT ?? 4000);
const host = "0.0.0.0";

try {
  await app.listen({ port, host });
  app.log.info(`listening on http://${host}:${port}`);
} catch (err) {
  app.log.error(err);
  process.exit();
}
