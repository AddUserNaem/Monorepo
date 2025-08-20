import { buildApp } from "./app";

const port = Number(process.env.PORT ?? 4000);
const host = "0.0.0.0";

async function main() {
  const app = await buildApp();
  try {
    await app.listen({ port, host });
    app.log.info(`listening on http://${host}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();
