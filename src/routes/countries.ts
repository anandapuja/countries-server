import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const countries = new Hono();
const prisma = new PrismaClient();
//Tulis Log di Client

// search countries
countries.get("/search", (c) => {
  const query = c.req.query("");
  return c.json({});
});

// GET ALL COUNTRY
countries.get("/", async (c) => {
  try {
    const countries = await prisma.country.findMany();
    if (countries.length === 0) throw new Error("Not Found");
    return c.json({ message: "Success Get Data", data: countries }, 200);
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
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
    if (error instanceof Error)
      return c.json(
        {
          message: error.message,
          data: error,
        },
        404
      );
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
      { message: "Success Insert Data", data: insertedCountry },
      201
    );
  } catch (error) {
    return c.json({
      message: "Error",
      data: error,
    });
  }
});

// DELETE COUNTRY BY ID
countries.delete("/:id", async (c) => {
  // get country
  const countryId = c.req.param("id");

  const country = await prisma.country.findUnique({
    where: {
      id: countryId,
    },
  });

  // check if country does not exist
  if (!country)
    return c.json(
      {
        message: "Not Found",
        data: country,
      },
      404
    );

  // delete country by id
  const deletedCountry = await prisma.country.delete({
    where: {
      id: countryId,
    },
  });

  return c.json(
    {
      message: "Success Delete Data",
      data: country,
      status: deletedCountry,
    },
    200
  );
});

// DELETE ALL COUNTRY
countries.delete("/", async (c) => {
  try {
    const deletedCountry = await prisma.country.deleteMany({});

    return c.json(
      {
        message: `Success Delete ${deletedCountry.count} Data`,
        data: deletedCountry,
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Error Delete Data", data: [] }, 500);
  }
});

// update country by id
countries.patch("/:id", (c) => {
  return c.json({ message: "Success Patch Country" });
});

export default countries;
