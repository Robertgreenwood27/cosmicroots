import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

export async function GET() {
  const glassware = JSON.parse(await readFile(new URL("../../../../../data/glassware.json", import.meta.url), "utf-8"));
  const incense = JSON.parse(await readFile(new URL("../../../../../data/incense.json", import.meta.url), "utf-8"));

  const products = [...glassware.products, ...incense.products];
  return NextResponse.json({ total: products.length, products });
}
