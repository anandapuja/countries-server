import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const countries = new Hono();
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
//Tulis Log di Client

// search countries
countries.get("/search", (c) => {
  const query = c.req.query("");
  return c.json({});
});

// GET ALL COUNTRY
countries.get("/", async (c) => {
  try {
    const countries = await prisma.country.findMany({
      include: {
        presidents: true,
        religions: true,
      },
    });
    if (countries.length === 0) throw new Error("Countries Not Found");
    return c.json(
      { message: "Success Get Data Countries", data: countries },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

// GET COUNTRY BY ID
countries.get("/:id", async (c) => {
  // get country id
  const countryId = c.req.param("id");

  try {
    // get country
    const country = await prisma.country.findUnique({
      where: {
        id: countryId,
      },
      include: {
        presidents: true,
        religions: true,
      },
    });

    if (!country) {
      throw new Error(`Country with ID: ${c.req.param("id")} Not Found`);
    }

    return c.json(
      {
        message: `Success Get Country with ID: ${c.req.param("id")}`,
        data: country,
      },
      200
    );
  } catch (error) {
    if (
      error instanceof Error ||
      error instanceof PrismaClientKnownRequestError
    )
      return c.json(
        {
          message: error.message,
        },
        404
      );
    return c.json(
      {
        message: "Internal Server Error",
        data: error,
      },
      500
    );
  }
});

// ADD NEW COUNTRY
countries.post("/", async (c) => {
  const body = await c.req.json();

  try {
    const insertedCountry = await prisma.country.create({
      data: {
        name: body.name,
        description: body.description,
        population: +body.population,
        flagImage: body.flagImage,
        capital: body.capital,
        updatedAt: new Date(),
        religions: {
          connect: body.religions,
        },
      },
      include: {
        religions: true,
        presidents: true,
      },
    });

    return c.json(
      { message: "Success Insert Data Country", data: insertedCountry },
      201
    );
  } catch (error) {
    console.log(error);
    return c.json(
      {
        message: "Internal Server Error",
        data: error,
      },
      500
    );
  }
});

// DELETE COUNTRY BY ID
countries.delete("/:id", async (c) => {
  try {
    const country = await prisma.country.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    if (!country)
      throw new Error(`Country with ID ${c.req.param("id")} Not Found`);

    await prisma.country.delete({
      where: {
        id: c.req.param("id"),
      },
    });

    return c.json(
      {
        message: `Success Delete Data with ID ${c.req.param("id")}`,
        data: country,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error" }, 500);
  }
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
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

// update country by id
countries.patch("/:id", (c) => {
  return c.json({ message: "Success Patch Country" });
});

export default countries;
