import { Hono } from "hono";
import dataCountries from "../data/countries";
import { PrismaClient } from "@prisma/client";
// import * as pg from "pg";

const countries = new Hono();
const prisma = new PrismaClient();

// search countries
countries.get("/search", (c) => {
  const query = c.req.query("");
  return c.json({});
});

// GET ALL COUNTRY
countries.get("/", async (c) => {
  try {
    const countries = await prisma.country.findMany();
    return c.json({ message: "Success Get Data", data: countries }, 200);
  } catch (error) {
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

// GET COUNTRY BY ID
countries.get("/:id", async (c) => {
  // get country id
  const countryId = c.req.param("id");

  // get country
  try {
    const country = await prisma.country.findUnique({
      where: {
        id: countryId,
      },
    });

    if (!country) {
      throw new Error("Not Found");
    }

    return c.json(
      {
        message: "Success Get Country",
        data: country,
      },
      200
    );
  } catch (error) {
    if (error === "Not Found") {
      return c.json(
        {
          message: "Not Found",
          data: error,
        },
        404
      );
    }
    return c.json(
      {
        message: "Error",
        data: error,
      },
      500
    );
  }
});

// ADD NEW COUNTRY
countries.post("/", async (c) => {
  // parsing data
  const body = await c.req.parseBody();

  // validating data
  let country = {
    name: body.name,
    description: body.description,
    population: +body.population,
    flagImage: body.flagImage,
    capital: body.capital,
    updatedAt: new Date(),
  };

  // insert data
  try {
    const insertedCountry = await prisma.country.create({
      data: country,
    });

    return c.json(
      { message: "Success Insert Data", message: insertedCountry },
      201
    );
  } catch (error) {
    return c.json({
      message: "Error",
      data: error,
    });
  }

  //insert data
  // const createCountry = await prisma.country.create({
  //   data: country,
  // });

  // const body = await c.req.parseBody();
  // const formData = body["image"];
  // const newCountry = {
  //   id: String(dataCountries.length + 1),
  //   name: String(body.name),
  //   description: String(body.description),
  //   flagImage: String(body.flagImage),
  //   populations: Number(body.populations),
  //   capital: String(body.capital),
  //   presidents: [
  //     {
  //       name: " ",
  //       presidentImage: " ",
  //     },
  //   ],
  // };
  // dataCountries.push(newCountry);
  // c.status(201);
  // return c.json({ message: "Success Add Country", countries: newCountry });
});

// delete country by id
countries.delete("/:id", (c) => {
  const country = dataCountries.find((country) => {
    return country.id === c.req.param("id");
  });

  if (!country) {
    c.status(404);
    return c.json({
      message: "Country Not Found!",
    });
  }

  c.status(200);
  return c.json({ message: "Success Delete Country", countries: country });
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
