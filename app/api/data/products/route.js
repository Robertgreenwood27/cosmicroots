import { NextResponse } from "next/server";
import glassware from "@/data/glassware.json";
import incense from "@/data/incense.json";
import tapestries from "@/data/tapestries.json";
import stickers from "@/data/stickers.json";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const cats = [glassware, incense, tapestries, stickers];
  const products = cats.flatMap(cat =>
    (cat.products || []).map(p => ({ ...p, category: cat.category }))
  );
  return NextResponse.json(
    { total: products.length, products },
    { headers: { "Cache-Control": "no-store" } }
  );
}
