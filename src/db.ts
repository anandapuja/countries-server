import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

// import "dotenv/config";
// import { Client } from "pg";
// import { Hono } from "hono";

// export const hono = new Hono();

// const client = new Client({
//   user: "postgres",
//   password: "postgres",
//   host: "localhost",
//   port: 5433,
//   database: "postgres",
// });

// const connection = async () => {
//   try {
//     const connect = await client.connect();
//     console.log(connect, "Berhasil");
//   } catch (error) {
//     console.log(error, "Error");
//   }
//   return;
// };

// connection();

// export default client;
