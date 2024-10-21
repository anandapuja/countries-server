import { Hono } from "hono";
import { logger } from "hono/logger";

import countriesRouter from "./routes/countries";
import presidentsRouter from "./routes/presidents";
import religionsRouter from "./routes/religions";

const app = new Hono();

app.use(logger());

app.route("/countries", countriesRouter);
app.route("/presidents", presidentsRouter);
app.route("/religions", religionsRouter);

export default app;
