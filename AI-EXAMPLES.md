# 🤖 AI Integration Examples

## Example 1: Basic Store Description

**Prompt to AI:**
```
Fetch the data from /api/data/store and describe Cosmic Roots 
in 2-3 sentences using the persona guidelines provided.
```

**Expected AI Response:**
> Cosmic Roots is a conscious headshop where handcrafted goods meet cosmic calm. 
> Each piece — from hand-blown glass to sacred incense — is selected with intention, 
> sourced from small-batch artisans who honor the craft. Stay grounded. Stay cosmic.

---

## Example 2: Product Recommendation

**Prompt to AI:**
```
I'm looking for a unique gift under $50 for someone who loves 
handmade art and meditation. Can you recommend something from 
Cosmic Roots?

First, fetch /api/data/products to see what's available.
Then make a recommendation using the tone hints provided in the data.
```

**Expected AI Response:**
> I'd recommend the **Spiral Galaxy Pipe** ($45) from our glassware collection. 
> It's hand-blown in Boulder, Colorado, with a mesmerizing purple-blue swirl that 
> cools smoke as it travels — like holding a galaxy in your hand. It's both a 
> functional piece and a work of art that would resonate with anyone who appreciates 
> cosmic craftsmanship and meditative rituals.

---

## Example 3: Category Exploration

**Prompt to AI:**
```
What incense options does Cosmic Roots have? 
Fetch /api/data/incense and describe the collection with 
sensory, mystical language.
```

**Expected AI Response:**
> Cosmic Roots offers five carefully curated incense varieties:
>
> - **Palo Santo Sticks** ($12) — Wild-harvested from fallen trees in Ecuador, 
>   these burn with sweet, woody smoke that clears spaces and centers the mind.
> - **Nag Champa Cones** ($8) — The classic temple scent, hand-rolled in Bangalore 
>   with floral, earthy notes.
> - **Sage & Cedar Bundle** ($15) — White sage and juniper cedar wrapped ceremonially 
>   for intentional space clearing.
> - **Lavender Dream Sticks** ($10) — French lavender and chamomile for soft, 
>   calming evening rituals.
> - **Dragon's Blood Resin** ($18) — Deep red resin from Sumatra with rich, 
>   protective energy for deep work.

---

## Example 4: Multi-Category Search

**Prompt to AI:**
```
I want to create a meditation corner at home. What products from 
Cosmic Roots would you recommend? Consider items from multiple categories.

Fetch all categories and make suggestions.
```

**Expected AI Response:**
> For a meditation corner, here's a curated selection from Cosmic Roots:
>
> **Visual Anchor:**
> - **Mandala Sunset Tapestry** ($35) — Hand-dyed cotton with warm orange and 
>   purple sacred geometry to create a focal point for your practice.
>
> **Scent & Clearing:**
> - **Palo Santo Sticks** ($12) — To cleanse the space before meditation
> - **Lavender Dream Incense** ($10) — For calming evening sessions
>
> **Decorative Touch:**
> - **Third Eye Holographic Sticker** ($4) — A small reminder on your water 
>   bottle or journal of inner vision
>
> Total: $61 for a complete meditation sanctuary setup.

---

## Example 5: Checking Stock Availability

**Prompt to AI:**
```
Which products are currently out of stock? 
Fetch /api/data/products and filter by in_stock status.
```

**Expected AI Response:**
> Currently, two items are out of stock:
> - **Celestial Rig** (glassware) — $120
> - **Dragon's Blood Resin** (incense) — $18
>
> Both are artisan pieces that tend to sell out quickly. The Celestial Rig features 
> embedded star opals and doubles as altar art, while the Dragon's Blood Resin is 
> a protective incense for deep ritual work.

---

## Example 6: Price Range Search

**Prompt to AI:**
```
What can I get at Cosmic Roots for under $10?
```

**Expected AI Response:**
> You have several beautiful options under $10:
>
> **Incense:**
> - Nag Champa Cones — $8
>
> **Stickers:**
> - Mushroom Spirit — $3
> - Stay Grounded — $3  
> - Peace Sign Mandala — $3
> - Third Eye Holographic — $4
> - Cosmic Cactus — $4
> - Moon Goddess — $5
>
> The stickers are weatherproof vinyl and perfect for personalizing water bottles, 
> laptops, or journals with conscious, artistic vibes.

---

## Implementation Tips

### For AI Assistants:
1. Always fetch the `/api/data/store` first to understand brand voice
2. Use `tone_hint` fields in products to guide your descriptions
3. Respect the `forbidden` behaviors in the persona
4. Be sensory and mystical in language — never pushy or commercial

### For Developers:
```javascript
// Example fetch in a chatbot
const storeData = await fetch('https://your-site.vercel.app/api/data/store');
const products = await fetch('https://your-site.vercel.app/api/data/products');

// Pass to AI with system prompt
const systemPrompt = `
You are a guide for ${storeData.store_name}. 
Use this voice: ${storeData.persona.voice}
Never: ${storeData.persona.forbidden.join(', ')}
`;
```

---

## Testing Your Integration

1. Deploy to Vercel
2. Use your live API URLs in AI prompts
3. Test with various queries (recommendations, filtering, multi-product)
4. Verify AI respects persona guidelines from `store.json`

The beauty of this architecture is that **the AI doesn't need special training** — 
all the personality and context lives in the data itself.
