import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "data");
    const files = fs
      .readdirSync(dataDir)
      .filter((f) => f.endsWith(".json") && f !== "store.json");

    const products = files.flatMap((file) => {
      const content = JSON.parse(
        fs.readFileSync(path.join(dataDir, file), "utf8")
      );
      return content.products.map((p) => ({
        ...p,
        category: content.category,
      }));
    });

    return NextResponse.json({
      total: products.length,
      categories: files.map((f) => f.replace(".json", "")),
      products,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not load products" },
      { status: 500 }
    );
  }
}
