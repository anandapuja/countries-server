import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const presidents = new Hono();
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

// GET ALL PRESIDENT
presidents.get("/", async (c) => {
  try {
    const presidents = await prisma.president.findMany({
      include: {
        country: true,
      },
    });
    if (presidents.length === 0) throw new Error("Presidents Not Found");
    return c.json(
      {
        message: "Success Get Data",
        data: presidents,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) {
      return c.json(
        {
          message: error.message,
        },
        404
      );
    }
    return c.json(
      {
        message: "Internal Server Error",
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
      include: {
        country: true,
      },
    });

    if (!president)
      throw new Error(`President with ID ${c.req.param("id")} Not Found`);

    return c.json(
      {
        message: `Success Get Data with ID ${c.req.param("id")}`,
        data: president,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

presidents.post("/", async (c) => {
  try {
    const body = await c.req.json();

    const insertedPresident = await prisma.president.create({
      data: {
        name: body.name,
        presidentImage: body.presidentImage,
        updatedAt: new Date(),
        country: {
          connect: {
            id: body.countryId,
          },
        },
      },
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

    if (!president)
      throw new Error(`President with ID ${c.req.param("id")} Not Found`);

    const deletedPresident = await prisma.president.delete({
      where: {
        id: c.req.param("id"),
      },
    });

    return c.json(
      {
        message: `Success Delete President with ID: ${c.req.param("id")}`,
        data: deletedPresident,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

// DELETE ALL PRESIDENTS
presidents.delete("/", async (c) => {
  try {
    const deletedPresidents = await prisma.president.deleteMany({});

    if (deletedPresidents.count === 0) {
      throw new Error("Presidents Not Found");
    }

    return c.json(
      {
        message: `Success Delete ${deletedPresidents.count} Data`,
        data: deletedPresidents,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

// UPDATE PRESIDENT WITH ID
presidents.patch("/:id", async (c) => {
  try {
    const president = await prisma.president.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    if (!president)
      throw new Error(`President with ID: ${c.req.param("id")} Not Found`);

    const body = await c.req.json();

    const updatedPresident = await prisma.president.update({
      where: {
        id: c.req.param("id"),
      },
      data: {
        name: body.name,
        updatedAt: new Date(),
      },
    });

    return c.json(
      {
        message: `Sucess Update President with ID ${updatedPresident.id}`,
        data: updatedPresident,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

export default presidents;
