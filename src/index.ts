import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();
const api = app.basePath("/api");
app.use(logger());

api.get('/', (c) => {
  return c.text('Hello Country!');
})

export default app;
