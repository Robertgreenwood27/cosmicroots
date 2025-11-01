# 🌌 Cosmic Roots v2 — AI-Readable Store

A minimal, AI-native architecture for hosting structured product knowledge. Zero frontend. Pure JSON APIs.

## 🎯 What This Is

This is an **AI-first e-commerce backend** where:
- All product data is stored as semantic JSON
- Every endpoint is designed for LLM consumption
- Brand persona and voice are embedded in the data itself
- No React, no CSS, no human UI — just clean, structured knowledge

## 📁 Project Structure

```
cosmic-roots-v2/
├── data/                    # All product and store data
│   ├── store.json          # Brand identity & persona
│   ├── glassware.json      # Glass products
│   ├── incense.json        # Incense products
│   ├── tapestries.json     # Tapestry products
│   ├── stickers.json       # Sticker products
│   └── sitemap.json        # API endpoint directory
├── app/api/data/           # Next.js API routes
│   ├── store/route.js      # GET /api/data/store
│   ├── products/route.js   # GET /api/data/products (all)
│   └── [category]/route.js # GET /api/data/{category}
├── public/
│   ├── images/             # Product placeholder images
│   └── ai.json             # AI manifest
└── package.json
```

## 🚀 Local Development

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Test the API endpoints:**
```bash
# Store info
curl http://localhost:3000/api/data/store

# All products
curl http://localhost:3000/api/data/products

# Specific category
curl http://localhost:3000/api/data/glassware
curl http://localhost:3000/api/data/incense
curl http://localhost:3000/api/data/tapestries
curl http://localhost:3000/api/data/stickers
```

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Cosmic Roots v2"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to https://vercel.com/new
- Import your GitHub repository
- Vercel will auto-detect Next.js
- Click **Deploy**

3. **Your endpoints will be live:**
```
https://your-project.vercel.app/api/data/store
https://your-project.vercel.app/api/data/products
https://your-project.vercel.app/api/data/glassware
```

## 🧠 AI Integration

This store is designed to be consumed by AI assistants. The data includes:

- **Persona guidelines** in `store.json` that define how AIs should speak about the brand
- **Tone hints** on each product to guide descriptive language
- **Semantic tags** for contextual understanding
- **Rich metadata** (origin, materials, dimensions)

### Example AI Prompt:
```
You are a guide for Cosmic Roots, a conscious headshop. 
Read the store data at /api/data/store and describe products 
with warmth, mysticism, and sensory detail.
```

## 📊 Product Data

Current inventory:
- **4 glass pieces** (pipes, bubblers, rigs)
- **5 incense varieties** (sticks, cones, bundles, resin)
- **5 tapestries** (mandalas, sacred geometry, celestial)
- **6 sticker designs** (holographic, illustrated, minimal)

All products have placeholder images in `/public/images/`.

## 🔧 Customization

### Adding New Products

1. Edit the relevant JSON file in `/data/`
2. Add product object with all fields
3. Generate a placeholder image (or add real image to `/public/images/`)
4. Redeploy

### Adding New Categories

1. Create `data/new-category.json`
2. Follow existing schema structure
3. Add images to `/public/images/new-category/`
4. Endpoints automatically work via `[category]` dynamic route

## 🎨 Image Generation

Placeholder images were generated using Python/Pillow:
```bash
python3 generate_images.py
```

Replace with real product photos by:
- Keeping the same filenames
- Placing them in `/public/images/{category}/`

## 📝 API Response Format

### Store Endpoint
```json
{
  "store_name": "Cosmic Roots",
  "tagline": "Stay grounded. Stay cosmic.",
  "persona": { ... },
  "values": [ ... ]
}
```

### Products Endpoint
```json
{
  "total": 20,
  "products": [
    {
      "id": "glass001",
      "name": "Spiral Galaxy Pipe",
      "price_usd": 45,
      "category": "glassware",
      ...
    }
  ]
}
```

## 🛠️ Tech Stack

- **Next.js 14** (App Router) - for API routes only
- **Node.js** - runtime
- **JSON** - data storage
- **Vercel** - hosting & edge caching

## 🌟 Philosophy

This project exists to answer: *What if we built e-commerce purely for AI consumption?*

No SEO optimization. No pixel-perfect designs. Just clean, semantic data that language models can read, understand, and describe with personality.

---

**Built with cosmic calm** ✨
