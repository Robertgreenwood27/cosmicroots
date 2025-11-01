# ⚡ Quick Start Guide

## 🏃 Get Running in 3 Minutes

### 1️⃣ Install & Test Locally

```bash
cd cosmic-roots-v2
npm install
npm run dev
```

Visit http://localhost:3000/api/data/store in your browser — you should see JSON!

### 2️⃣ Test All Endpoints

Open a new terminal and run:

```bash
# Test store
curl http://localhost:3000/api/data/store | jq

# Test all products
curl http://localhost:3000/api/data/products | jq

# Test categories
curl http://localhost:3000/api/data/glassware | jq
curl http://localhost:3000/api/data/incense | jq
curl http://localhost:3000/api/data/tapestries | jq
curl http://localhost:3000/api/data/stickers | jq
```

*(Install `jq` with `brew install jq` or `apt-get install jq` for pretty JSON)*

### 3️⃣ Deploy to Vercel

#### Option A: One-Command Deploy
```bash
npx vercel
```

#### Option B: GitHub + Dashboard
```bash
# Initialize git
git init
git add .
git commit -m "AI-readable store ready"

# Push to GitHub
git remote add origin https://github.com/yourusername/cosmic-roots-v2.git
git branch -M main
git push -u origin main

# Then visit vercel.com/new and import the repo
```

### 4️⃣ Verify Production

Once deployed, test your live endpoints:

```bash
# Replace with your actual Vercel URL
curl https://your-project.vercel.app/api/data/store | jq
curl https://your-project.vercel.app/api/data/products | jq
```

## 🧪 Testing with Claude or ChatGPT

Try this prompt:

```
I'm building an AI shopping assistant for Cosmic Roots. 
Can you fetch the store data from /api/data/store 
and describe the brand in 2-3 sentences using the persona guidelines?

Then, fetch /api/data/glassware and recommend a product 
for someone who values handcrafted art.
```

## 🐛 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### API routes returning 404
- Make sure you're using Next.js 14+ with App Router
- Verify files are in `app/api/data/` not `pages/api/`
- Check that `next.config.js` has `experimental.appDir: true`

### Images not loading
- Confirm images are in `public/images/`
- Paths in JSON should be `/images/category/file.jpg` (not `public/images`)
- Run `python3 generate_images.py` to regenerate if needed

## 🎨 Customizing Your Store

### Change product data
Edit files in `/data/` — they're just JSON!

### Add new categories
1. Create `/data/yourcategory.json`
2. Add images to `/public/images/yourcategory/`
3. The `[category]` route automatically handles it

### Update brand voice
Edit `/data/store.json` — the `persona` object controls AI tone

## 📚 Next Steps

- Replace placeholder images with real photos
- Add more products to each category
- Create additional categories
- Set up custom domain on Vercel
- Add analytics (optional)

---

**You're ready to test!** 🚀
