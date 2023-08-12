import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const url = process.env.DATABASE_URL || "file:../local.db";
const authToken = process.env.DATABASE_TOKEN || undefined;

const client = createClient({
  url,
  authToken,
});

export const db = drizzle(client);
