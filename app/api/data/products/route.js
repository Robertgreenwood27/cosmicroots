import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const base = path.join(process.cwd(), "data");
  const glassware = JSON.parse(await readFile(path.join(base, "glassware.json"), "utf-8"));
  const incense = JSON.parse(await readFile(path.join(base, "incense.json"), "utf-8"));

  const products = [...glassware.products, ...incense.products];
  return NextResponse.json({ total: products.length, products });
}
