import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const fileUrl = new URL("../../../../data/store.json", import.meta.url);
  const raw = await readFile(fileUrl, "utf-8");
  const store = JSON.parse(raw);
  return NextResponse.json(store, { headers: { "Cache-Control": "no-store" } });
}
