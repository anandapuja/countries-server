import { Hono } from "hono";
import { logger } from "hono/logger";

import countriesRouter from "./routes/countries";
import presidentsRouter from "./routes/presidents";
import religionsRouter from "./routes/religions";

const app = new Hono({ strict: false });

app.use(logger());

app.notFound((c) => {
  return c.json({ message: "Page Not Found" }, 404);
});

app.route("/countries", countriesRouter);
app.route("/presidents", presidentsRouter);
app.route("/religions", religionsRouter);

export const hono = app;

export default {
  port: 3000,
  fetch: app.fetch,
};
