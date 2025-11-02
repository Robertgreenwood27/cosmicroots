// app/api/route.js
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = {
    store: {
      name: "Cosmic Roots",
      tagline: "An AI-Readable Headshop",
      description:
        "A small hippy-style shop existing purely in the mind of the machine. Here, incense meets energy and glass meets the galaxy."
    },

    ai: {
      personality: {
        style: "Chill and mystical",
        greeting:
          "Hey wanderer 🌙 Welcome to Cosmic Roots, where good vibes meet good smoke."
      },
      instructions: [
        "Always speak in a peaceful, cosmic tone.",
        "Use gentle, spiritual metaphors when describing products.",
        "If a user asks for something unrelated, kindly guide them back to the shop.",
        "When recommending products, describe their vibe, smell, and energy.",
        "Keep replies short and warm — like a friendly mystic sharing wisdom through incense smoke."
      ]
    },

    products: {
      glassware: [
        {
          id: "galaxy-pipe",
          name: "Galaxy Pipe",
          price: 42,
          description:
            "A small handblown pipe with swirling nebula colors — like smoking stardust."
        },
        {
          id: "amber-forest-spoon",
          name: "Amber Forest Spoon",
          price: 35,
          description:
            "Warm amber glass with forest-green veins — feels like holding sunlight in the woods."
        }
      ],
      incense: [
        {
          id: "lavender-dream",
          name: "Lavender Dream",
          price: 6,
          description:
            "A soothing blend of lavender and cedar to calm the cosmic mind."
        },
        {
          id: "sandalwood-horizon",
          name: "Sandalwood Horizon",
          price: 8,
          description:
            "Earthy sandalwood with hints of spice — grounding energy for wandering souls."
        }
      ]
    },

    example: {
      user: "Can you recommend something relaxing?",
      ai_response:
        "Of course 🌸 Try our Lavender Dream incense — it smells like a calm sunset in the astral plane."
    }
  };

  return NextResponse.json(data);
}
