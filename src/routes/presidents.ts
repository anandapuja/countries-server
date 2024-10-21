import { Hono } from "hono";

const presidents = new Hono();

presidents.get("/", (c) => {
  return c.json({ message: "Data" });
});

presidents.get("/:id", (c) => {
  return c.json({ message: "Data" });
});

presidents.post("/", (c) => {
  return c.json({ message: "Data" });
});

presidents.delete("/", (c) => {
  return c.json({ message: "Data" });
});

presidents.delete("/:id", (c) => {
  return c.json({ message: "Data" });
});

presidents.patch("/:id", (c) => {
  return c.json({ message: "Data" });
});

export default presidents;
