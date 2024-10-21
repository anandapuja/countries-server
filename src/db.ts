import "dotenv/config";
import { Client } from "pg";

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5433,
  database: "postgres",
});

const connection = async () => {
  try {
    const connect = await client.connect();
    console.log(connect, "Berhasil");
  } catch (error) {
    console.log(error, "Error");
  }
  return;
};

connection();

export default client;
