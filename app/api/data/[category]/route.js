import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(_req, { params }) {
  const category = params.category?.toLowerCase();
  const allowed = new Set(["glassware", "incense"]);

  if (!allowed.has(category)) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  const fileUrl = new URL(`../../../../../data/${category}.json`, import.meta.url);
  const file = await readFile(fileUrl, "utf-8");
  return NextResponse.json(JSON.parse(file));
}
