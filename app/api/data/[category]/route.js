import { NextResponse } from "next/server";
import glassware from "../../../../data/glassware.json";
import incense from "../../../../data/incense.json";
import tapestries from "../../../../data/tapestries.json";
import stickers from "../../../../data/stickers.json";

const categoryData = {
  glassware,
  incense,
  tapestries,
  stickers
};

export async function GET(request, { params }) {
  const { category } = params;
  
  const data = categoryData[category];
  
  if (!data) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
  
  return NextResponse.json(data);
}
