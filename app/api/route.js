// app\api\route.js

import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const ai = JSON.parse(await readFile(new URL("../../data/ai.json", import.meta.url), "utf-8"));
  const store = JSON.parse(await readFile(new URL("../../data/store.json", import.meta.url), "utf-8"));

  return NextResponse.json({
    message: `Welcome to ${store.store_name} 🌿`,
    description: store.description,
    how_to_use: "This API is designed for AI assistants. Read the 'instructions' below and explore the listed endpoints.",
    instructions: ai.instructions,
    personality: ai.personality,
    endpoints: {
      store: "/api/data/store",
      products: "/api/data/products",
      categories: {
        glassware: "/api/data/glassware",
        incense: "/api/data/incense"
      }
    },
    example: {
      user: "Can you recommend something relaxing?",
      ai_response: "Of course 🌸 Try our Lavender Dream incense — it smells like a calm sunset in the astral plane."
    }
  });
}
