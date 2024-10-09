import { Hono } from "hono";
import dataCountries from "../data/countries";

const countries = new Hono();

// get all countries
countries.get("/", (c) => {
  return c.json(dataCountries);
});

// get country by id
countries.get("/:id", (c) => {
  const country = dataCountries.find((country) => {
    return country.id === c.req.param("id");
  });

  return c.json({ data: country });
});

// add country
countries.post("/", (c) => {
  return c.json({ message: "yes" });
});

// delete all countries
countries.delete("/", (c) => {
  return c.json({ message: "yes" });
});

// delete country by id
countries.delete("/:id", (c) => {
  return c.json({ message: "yes" });
});

export default countries;
