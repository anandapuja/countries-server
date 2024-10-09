import { Hono } from "hono";
import { logger } from "hono/logger";
import countriesRouter from "./routes/countries";

const app = new Hono();
const api = app.basePath("/api");

app.use(logger());

app.route("/countries", countriesRouter);

export default app;
