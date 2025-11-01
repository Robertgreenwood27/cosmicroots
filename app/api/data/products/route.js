import { NextResponse } from "next/server";
import glassware from "../../../../data/glassware.json";
import incense from "../../../../data/incense.json";
import tapestries from "../../../../data/tapestries.json";
import stickers from "../../../../data/stickers.json";

export async function GET() {
  const categories = [glassware, incense, tapestries, stickers];
  
  const products = categories.flatMap(category => {
    return (category.products || []).map(p => ({
      ...p,
      category: category.category
    }));
  });

  return NextResponse.json({ total: products.length, products });
}
