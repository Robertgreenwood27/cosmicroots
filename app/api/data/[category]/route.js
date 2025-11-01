import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      `${params.category}.json`
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Could not load category data" },
      { status: 500 }
    );
  }
}
