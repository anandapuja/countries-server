import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const religions = new Hono();
const prisma = new PrismaClient();

religions.get("/", async (c) => {
  try {
    const religions = await prisma.religion.findMany();
    if (religions.length === 0) throw new Error("Not Found");
    return c.json({ message: "Success Get Data", data: religions }, 200);
  } catch (error) {
    if (error instanceof Error)
      return c.json({ message: error.message, data: [] }, 404);
    return c.json(
      {
        message: "Error Get Data",
        data: error,
      },
      500
    );
  }
});

religions.get("/:id", async (c) => {
  try {
    const religion = await prisma.religion.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });
    if (!religion) throw new Error("Not Found");
    return c.json(
      {
        message: "Success Get Data",
        data: religion,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error)
      return c.json({ message: error.message, data: {} }, 404);
    return c.json({ message: "Error Get Data", data: {} }, 500);
  }
});

religions.post("/", async (c) => {
  try {
    const body = await c.req.parseBody();
    const religion = {
      name: body.name,
      updatedAt: new Date(),
    };

    const createdReligion = await prisma.religion.create({
      data: religion,
    });
    if (!createdReligion) throw new Error();
    return c.json(
      { message: "Success Create Religion", data: createdReligion },
      201
    );
  } catch (error) {
    return c.json({ message: "Error Insert Data", data: error }, 500);
  }
});

religions.delete("/", async (c) => {
  try {
    const religion = await prisma.religion.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    if (!religion) throw new Error("Not Found");

    const deletedRelition = await prisma.religion.deleteMany();
    return c.json(
      {
        message: `Success Delete ${deletedRelition.count} Data`,
        data: deletedRelition,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error)
      return c.json({ message: error.message, data: {} }, 404);
    return c.json({ message: "Error Delete Data", data: error }, 500);
  }
});

religions.delete("/:id", async (c) => {
  try {
    const religion = await prisma.religion.findUnique({
      where: { id: c.req.param("id") },
    });
    if (!religion) throw new Error("Not Found");
  } catch (error) {
    if (error instanceof Error)
      return c.json({ message: error.message, data: {} }, 404);
    return c.json({ message: "Error Delete Data", data: {} }, 500);
  }
});

religions.patch("/:id", (c) => {
  return c.json({ message: "Data" });
});

export default religions;
