import { Hono } from "hono";
import dataCountries from "../data/countries";

const countries = new Hono();

// search countries
countries.get("/search", (c) => {
  const query = c.req.query("query");
  return c.json({});
});

// get all countries
countries.get("/", (c) => {
  if (dataCountries.length === 0) {
    c.status(404);
    return c.json({
      message: "Countries Not Found!",
    });
  }

  c.status(200);
  return c.json({ message: "Success Get Countries", data: dataCountries });
});

// get country by id
countries.get("/:id", (c) => {
  const country = dataCountries.find((country) => {
    return country.id === c.req.param("id");
  });

  if (!country) {
    c.status(404);
    return c.json({ message: "Country Not Found!" });
  }

  c.status(200);
  return c.json({ message: "Success Get Country", data: country });
});

// add new country
countries.post("/", async (c) => {
  const body = await c.req.parseBody();
  const newCountry = {
    id: String(dataCountries.length + 1),
    name: String(body.name),
    description: String(body.description),
    flagImage: String(body.flagImage),
    populations: Number(body.populations),
    capital: String(body.capital),
    presidents: [
      {
        name: " ",
        presidentImage: " ",
      },
    ],
  };
  const addedCountry = dataCountries.concat(newCountry);
  c.status(200);
  return c.json({ message: "Success Add Country", countries: addedCountry });
});

// delete country by id
countries.delete("/:id", (c) => {
  const idCountry = c.req.param("id");

  const newCountries = dataCountries.filter(
    (dataCountry) => dataCountry.id !== idCountry
  );

  c.status(200);
  return c.json({ message: "Success Delete Country", countries: newCountries });
});

// delete all countries
countries.delete("/", async (c) => {
  c.status(200);
  return c.json({ message: "Success Delete Countries", countries: [] });
});

// update country by id
countries.patch("/:id", (c) => {
  return c.json({ message: "Success Patch Country" });
});

export default countries;
