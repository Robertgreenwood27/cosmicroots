import { NextResponse } from "next/server";
import store from "@/data/store.json";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(store, { headers: { "Cache-Control": "no-store" } });
}
