import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const dataDir = path.join(process.cwd(), "data");
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".json") && f !== "store.json" && f !== "sitemap.json");

  const products = files.flatMap(file => {
    const content = JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
    return (content.products || []).map(p => ({
      ...p,
      category: content.category
    }));
  });

  return NextResponse.json({ total: products.length, products });
}
