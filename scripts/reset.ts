import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Resetting the db");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challenges);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    console.log("Resetting finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to Reset the database");
  }
};
main();
