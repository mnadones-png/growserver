import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({
  path: "../../.env",
});

const dbUrl = process.env.DATABASE_URL || "postgresql://growserver:ilovereimu@127.0.0.1:5433/growserver";

export default defineConfig({
  dialect: "postgresql",
  schema: ["../../packages/db/shared/schemas/index.ts"],
  out: "./drizzle",
  dbCredentials: {
    url: dbUrl,
  },
  strict: false,
  verbose: false,
});
