import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

export async function GET() {
  const file = await readFile(new URL("../../../data/store.json", import.meta.url), "utf-8");
  return NextResponse.json(JSON.parse(file));
}
