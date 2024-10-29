import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const religions = new Hono();
const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

// GET ALL RELIGIONS
religions.get("/", async (c) => {
  try {
    const religions = await prisma.religion.findMany({
      include: {
        countries: true,
      },
    });
    if (religions.length === 0) throw new Error("Religions Not Found");
    return c.json({ message: "Success Get Data", data: religions }, 200);
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json(
      {
        message: "Internal Server Error",
        data: error,
      },
      500
    );
  }
});

// GET RELIGION BY ID
religions.get("/:id", async (c) => {
  try {
    const religion = await prisma.religion.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });
    if (!religion)
      throw new Error(`Religion id: ${c.req.param("id")} Not Found`);
    return c.json(
      {
        message: "Success Get Data",
        data: religion,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

// INSERT RELIGION
religions.post("/", async (c) => {
  try {
    const { name } = await c.req.json();

    if (name === "") {
      return c.json({ message: "Religion Can't Empty" }, 400);
    }

    const religion = {
      name: name,
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
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return c.json({ message: "Religion Already Exist" }, 400);
      }
    }

    return c.json({ message: "Internal Server Error" }, 500);
  }
});

// DELETE ALL RELIGIONS
religions.delete("/", async (c) => {
  try {
    const deletedRelition = await prisma.religion.deleteMany();

    if (deletedRelition.count === 0) {
      throw new Error("Religions Not Found");
    }
    return c.json(
      {
        message: `Success Delete ${deletedRelition.count} Data`,
      },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

// DELETE RELIGION BY ID
religions.delete("/:id", async (c) => {
  try {
    const religion = await prisma.religion.findUnique({
      where: { id: c.req.param("id") },
    });

    if (!religion)
      throw new Error(`Religion id: ${c.req.param("id")} Not Found`);

    const deletedReligion = await prisma.religion.delete({
      where: {
        id: c.req.param("id"),
      },
    });

    return c.json(
      { message: `Success Delete Religion: ${deletedReligion.name}` },
      200
    );
  } catch (error) {
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

// UPDATE RELIGIONS
religions.patch("/:id", async (c) => {
  try {
    const religion = await prisma.religion.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    if (!religion)
      throw new Error(`Religion id: ${c.req.param("id")} Not Found`);

    const { name } = await c.req.json();

    if (name === "") {
      return c.json({ message: "Religion Can't Empty" }, 400);
    }

    const updatedReligion = await prisma.religion.update({
      where: {
        id: c.req.param("id"),
      },
      data: {
        name: name,
        updatedAt: new Date(),
      },
    });

    return c.json({ message: updatedReligion }, 200);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return c.json({ message: "Religion Already Exist" }, 400);
      }
    }
    if (error instanceof Error) return c.json({ message: error.message }, 404);
    return c.json({ message: "Internal Server Error", data: error }, 500);
  }
});

export default religions;
