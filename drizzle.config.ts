import { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const url = process.env.DATABASE_URL || "file:../local.db";
const authToken = process.env.DATABASE_TOKEN || undefined;

export default {
  schema: "./lib/schema.ts",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url,
    authToken,
  },
  verbose: true,
  strict: true,
} satisfies Config;
