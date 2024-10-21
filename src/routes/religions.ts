import { Hono } from "hono";

const religions = new Hono();

religions.get("/", (c) => {
  return c.json({ message: "Data" });
});

religions.get("/:id", (c) => {
  return c.json({ message: "Data" });
});

religions.post("/", (c) => {
  return c.json({ message: "Data" });
});

religions.delete("/", (c) => {
  return c.json({ message: "Data" });
});

religions.delete("/:id", (c) => {
  return c.json({ message: "Data" });
});

religions.patch("/:id", (c) => {
  return c.json({ message: "Data" });
});

export default religions;
