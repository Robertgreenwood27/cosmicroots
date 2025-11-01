import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const allowed = new Set(["glassware", "incense", "tapestries", "stickers"]);

export async function GET(_req, { params }) {
  const category = String(params?.category || "").toLowerCase();
  if (!allowed.has(category)) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
  const fileUrl = new URL(`../../../../data/${category}.json`, import.meta.url);
  const raw = await readFile(fileUrl, "utf-8");
  const data = JSON.parse(raw);
  return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
}
