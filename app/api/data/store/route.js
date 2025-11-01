import { NextResponse } from "next/server";
import store from "../../../../data/store.json";

export async function GET() {
  return NextResponse.json(store);
}
