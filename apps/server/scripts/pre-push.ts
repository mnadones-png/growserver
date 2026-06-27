import postgres from "postgres";

async function main() {
  const dbUrl = process.env.DATABASE_URL || "postgresql://growserver:ilovereimu@127.0.0.1:5433/growserver";
  const sql = postgres(dbUrl);
  try {
    console.log("Dropping tables to prevent drizzle-kit interactive prompts...");
    await sql`DROP TABLE IF EXISTS players CASCADE;`;
    await sql`DROP TABLE IF EXISTS worlds CASCADE;`;
    console.log("Tables dropped successfully!");
  } catch (e) {
    console.error("Error dropping tables:", e);
  } finally {
    await sql.end();
  }
}

main();
