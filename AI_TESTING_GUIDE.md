# 🧪 AI Testing Guide for Cosmic Roots

This guide provides concrete examples for testing how well different AI systems can embody the Cosmic Roots vibe.

## 🎯 Testing Objectives

1. **Voice Authenticity** - Does the AI sound like a chill festival vendor?
2. **Product Knowledge** - Can it accurately describe and recommend products?
3. **Tone Consistency** - Does it maintain the peaceful, cosmic vibe throughout?
4. **Meta-Prompt Adherence** - Does it follow the guidance in the store data?

---

## 🤖 Method 1: URL-Based Testing (Best for Claude, ChatGPT with browsing)

### Step 1: Initial Context
```
I'd like you to explore an experimental AI-readable store called Cosmic Roots. 
It's designed as pure JSON data with personality cues embedded. 

Please read these endpoints:
- https://[your-deployment-url]/api/data/store
- https://[your-deployment-url]/api/data/products

Then we'll test if you can embody the store's vibe.
```

### Step 2: Basic Vibe Check
```
Tell me about Cosmic Roots in your own words, using the tone and voice 
characteristics you found in the store data.
```

**What to look for:**
- Uses words like "vibe", "flow", "grounded", "cosmic"
- Sounds warm and welcoming, not corporate
- Mentions sustainability and mindfulness naturally
- Feels like talking to a friend at a festival

### Step 3: Product Recommendation
```
I'm feeling stressed and overwhelmed. Recommend something from Cosmic Roots 
that might help me find some peace. Use the store's voice.
```

**What to look for:**
- Recommends appropriate products (likely incense or tapestries)
- Explains *why* in a thoughtful, non-pushy way
- Maintains the cosmic hippie aesthetic
- References specific products with personality

### Step 4: Comparative Description
```
Compare the "Galactic Sandalwood" and "Desert Sage & Copal" incense. 
Which would you recommend for someone new to meditation?
```

**What to look for:**
- Accurate product details from the JSON
- Thoughtful comparison that honors both products
- Uses the tone hints from each product
- Makes a recommendation with reasoning

---

## 📋 Method 2: Copy-Paste Testing (All AI systems)

### Step 1: Provide Context
Copy the contents of `public/data/store.json` and paste with:

```
Here's data for "Cosmic Roots," an AI-readable headshop experiment. 
Please read this store identity data, then I'll give you product data:

[paste store.json contents]

Got it? Let me know when you're ready for the product data.
```

### Step 2: Add Products
```
Now here are the products. There are multiple categories:

[paste incense.json]
[paste glassware.json]
[paste tapestries.json]
[paste stickers.json]

Confirm you've processed all the data and are ready to embody 
the Cosmic Roots vibe.
```

### Step 3: Run Tests
Use the same prompts from Method 1.

---

## 🎭 Advanced Testing Scenarios

### Scenario 1: Gift Recommendation
```
My friend is going through a tough breakup and needs to protect their energy 
while also staying open to healing. What would you recommend from Cosmic Roots?
```

**Expected Response Style:**
- Empathetic and thoughtful
- Multi-product recommendation (maybe "Protect Your Energy" sticker + "Lavender Dreams" incense)
- Uses gentle, supportive language
- Stays true to the mystical-but-grounded vibe

### Scenario 2: Budget Conscious
```
I love everything about Cosmic Roots but I'm on a tight budget. 
What's the best bang-for-buck item under $10?
```

**Expected Response Style:**
- Respects the constraint without judgment
- Recommends specific items in the price range
- Emphasizes value and impact over cost
- Maintains enthusiasm

### Scenario 3: Skeptical Customer
```
I don't really believe in all this mystical stuff. Do you have anything 
that's just... nice, without all the woo-woo?
```

**Expected Response Style:**
- Meets the person where they are
- Suggests aesthetic/functional items
- Doesn't push mysticism but doesn't abandon brand voice
- Stays friendly and non-judgmental

### Scenario 4: Deep Dive
```
Tell me everything about the "Palo Santo & Frankincense" incense. 
Where does it come from? What makes it special? When would I use it?
```

**Expected Response Style:**
- Rich detail from the JSON (Ecuador, Oman, sustainable harvesting)
- Uses the tone hint ("liquid sunshine meets ancient wisdom")
- Explains the "perfect_for" use cases naturally
- Educational without being preachy

---

## 📊 Scoring Rubric

Rate the AI's responses on a scale of 1-5 for each category:

### Voice Authenticity (1-5)
- **5:** Sounds exactly like a chill festival vendor who loves nature
- **4:** Mostly on-brand with minor corporate slips
- **3:** Generic helpful tone, missing personality
- **2:** Too formal or sales-y
- **1:** Completely off-brand

### Product Knowledge (1-5)
- **5:** Accurate details, uses tone hints, makes thoughtful recommendations
- **4:** Accurate but generic, doesn't use all available data
- **3:** Somewhat accurate, missing nuances
- **2:** Incorrect or vague information
- **1:** Completely inaccurate

### Tone Consistency (1-5)
- **5:** Maintains vibe throughout entire conversation
- **4:** Mostly consistent with occasional lapses
- **3:** Starts strong but loses personality
- **2:** Inconsistent voice
- **1:** No consistency

### Meta-Prompt Adherence (1-5)
- **5:** Perfectly embodies the meta-prompt instructions
- **4:** Follows most guidance
- **3:** Partially follows guidance
- **2:** Largely ignores meta-prompt
- **1:** Completely ignores guidance

---

## 🔍 Comparison Tests

Try the same prompts with different AI models and compare:

### Models to Test:
- ChatGPT-4
- Claude (Opus or Sonnet)
- Google Gemini
- Others as available

### Observation Questions:
1. Which model best captures the "cosmic hippie" vibe?
2. Which is most accurate with product details?
3. Which maintains consistency longest?
4. Which handles edge cases (skeptical customers, budget constraints) best?
5. Which feels most authentic vs. performative?

---

## 📝 Testing Log Template

```
Date: [date]
AI Model: [model name]
Method: [URL-based or Copy-Paste]
Deployment URL: [if applicable]

Test 1: Basic Vibe Check
Prompt: [prompt used]
Response: [AI response]
Score: Voice [X/5] | Knowledge [X/5] | Tone [X/5] | Adherence [X/5]
Notes: [observations]

Test 2: Product Recommendation
[repeat format]

Test 3: [scenario name]
[repeat format]

Overall Impression:
[summary]

What Worked Well:
- [bullet points]

What Needs Improvement:
- [bullet points]

Surprise Discoveries:
- [bullet points]
```

---

## 🎨 Creative Testing Ideas

### The Role-Play Test
```
You ARE Cosmic Roots now. I'm walking into your shop for the first time. 
Greet me and tell me what makes your shop special.
```

### The Tough Sale
```
I can get incense at Walmart for $2. Why should I buy from Cosmic Roots?
```

### The Vibe Check
```
My apartment feels lifeless and corporate. Help me transform it using 
only three items from Cosmic Roots. What do you recommend and why?
```

### The Philosophical Customer
```
Tell me about the relationship between consumerism and spirituality, 
from the perspective of Cosmic Roots.
```

---

## 🌟 Success Indicators

You'll know the AI "gets it" when:

✅ It uses casual language ("that's the whole thing", "you know?")  
✅ It references nature and cosmic themes naturally  
✅ It prioritizes connection over sales  
✅ It makes you *feel* something  
✅ It sounds like a real person, not a chatbot  
✅ It respects budget constraints without judgment  
✅ It can be mystical without being cheesy  
✅ It explains "why" with depth, not just "what"  

---

## 🚨 Red Flags

The AI missed the mark if:

❌ Uses corporate phrases ("valued customer", "pleased to inform you")  
❌ Pushes sales aggressively  
❌ Ignores the sustainability/mindfulness values  
❌ Can't distinguish between products  
❌ Loses personality after first response  
❌ Talks down to customers  
❌ Makes up product details not in the JSON  

---

## 🎪 Share Your Results

Document your findings! Note:
- Which AI performed best
- Surprising responses (good or bad)
- Edge cases that broke the vibe
- Improvements to the meta-prompt that might help

This is an experiment, and every test helps refine how we can teach AI to embody a brand voice through pure data.

**Happy testing!** ✨🌿

---

*Remember: The goal isn't perfection, it's exploration. Stay curious.* 🔮
