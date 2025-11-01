import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  const { category } = params;
  const filePath = path.join(process.cwd(), "data", `${category}.json`);
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }
}
