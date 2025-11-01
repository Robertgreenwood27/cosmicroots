import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function load(jsonRelPath) {
  const fileUrl = new URL(jsonRelPath, import.meta.url);
  return JSON.parse(await readFile(fileUrl, "utf-8"));
}

export async function GET() {
  const glassware = await load("../../../../data/glassware.json");
  const incense = await load("../../../../data/incense.json");
  const tapestries = await load("../../../../data/tapestries.json");
  const stickers = await load("../../../../data/stickers.json");

  const products = [glassware, incense, tapestries, stickers].flatMap(cat =>
    (cat.products || []).map(p => ({ ...p, category: cat.category }))
  );

  return NextResponse.json({ total: products.length, products }, { headers: { "Cache-Control": "no-store" } });
}
