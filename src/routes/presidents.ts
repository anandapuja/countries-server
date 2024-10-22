import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const presidents = new Hono();
const prisma = new PrismaClient();

// GET ALL PRESIDENT
presidents.get("/", async (c) => {
  try {
    const allPresidents = await prisma.president.findMany();
    if (allPresidents.length === 0) throw new Error("Not Found");
    return c.json(
      {
        message: "Success Get Data",
        data: allPresidents,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) {
      return c.json(
        {
          message: error.message,
          data: [],
        },
        404
      );
    }
    return c.json(
      {
        message: "Error Get Data",
        data: error,
      },
      500
    );
  }
});

// GET PRESIDENT BY ID
presidents.get("/:id", async (c) => {
  try {
    const president = await prisma.president.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    if (!president) throw new Error("Not Found");

    return c.json(
      {
        message: `Success Get Data with ID ${c.req.param("id")}`,
        data: president,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error)
      return c.json({ message: error.message, data: [] }, 404);
    return c.json({ message: "Error", data: error }, 500);
  }
});

presidents.post("/", async (c) => {
  const body = await c.req.parseBody();

  const president = {
    name: body.name,
    presidentImage: body.president_image,
    countryId: body.country_id,
    updatedAt: new Date(),
  };

  try {
    const insertedPresident = await prisma.president.create({
      data: president,
    });

    if (!insertedPresident) throw new Error("Internal Server Error");
    return c.json({
      message: "Success Insert Data",
      data: insertedPresident,
    });
  } catch (error) {
    if (error instanceof Error) {
      return c.json(
        {
          message: error.message,
          data: {},
        },
        500
      );
    }
    return c.json(
      {
        message: error,
        data: {},
      },
      500
    );
  }
});

// DELETE PRESIDENT BY ID
presidents.delete("/:id", async (c) => {
  try {
    const president = await prisma.president.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    if (!president) throw new Error("Not Found");

    const deletedPresident = await prisma.president.delete({
      where: {
        id: c.req.param("id"),
      },
    });

    return c.json(
      { message: "Success Delete Data", data: deletedPresident },
      200
    );
  } catch (error) {
    if (error instanceof Error)
      return c.json({ message: error.message, data: [] }, 404);
    return c.json({ message: "Error Delete Data", data: error }, 500);
  }
});

// DELETE ALL PRESIDENTS
presidents.delete("/", async (c) => {
  try {
    const deletedPresidents = await prisma.president.deleteMany({});
    return c.json(
      {
        message: `Success Delete ${deletedPresidents.count} Data`,
        data: deletedPresidents,
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Error Delete Data", data: error }, 500);
  }
});

presidents.patch("/:id", (c) => {
  return c.json({ message: "Data" });
});

export default presidents;
