import { prisma } from "../db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

class CountryController {
  constructor() {}

  getCountries() {
    console.log("MASUK CONTROLLER");
  }

  async getCountryById(c: any) {
    const countryId = c.req.param("id");
    try {
      // get country
      const country = await prisma.country.findUnique({
        where: {
          id: countryId,
        },
        include: {
          presidents: true,
          religions: { include: { religion: true } },
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
  }

  postCountry() {}

  deleteCountries() {}

  deleteCountryById() {}

  patchCountryById() {}
}

const countryController = new CountryController();

export default countryController;
