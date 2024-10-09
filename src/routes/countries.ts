import { Hono } from "hono";

const countries = new Hono();

countries.get("/", (c) => {
  return c.json({
    message: "Hello Routes",
  });
});

export default countries;
