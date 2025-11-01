import { NextResponse } from "next/server";
import glassware from "@/data/glassware.json";
import incense from "@/data/incense.json";
import tapestries from "@/data/tapestries.json";
import stickers from "@/data/stickers.json";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAP = {
  glassware, incense, tapestries, stickers
};

export async function GET(_req, { params }) {
  const key = String(params?.category || "").toLowerCase();
  const data = MAP[key];
  if (!data) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
  return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
}
