export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 text-transparent bg-clip-text">
            🌿 Cosmic Roots
          </h1>
          <p className="text-2xl text-purple-300 mb-2">Stay grounded. Stay cosmic.</p>
          <p className="text-lg text-slate-300 italic">An AI-Readable Headshop Experiment</p>
        </div>

        {/* Concept Explanation */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">🎯 The Concept</h2>
          <p className="text-slate-200 mb-4 leading-relaxed">
            Cosmic Roots is a mock online headshop designed not for human browsing, but for <strong>AI consumption</strong>. 
            Instead of styled webpages, everything lives as structured JSON files containing product info, 
            brand personality cues, and tone guidance.
          </p>
          <p className="text-slate-200 leading-relaxed">
            The goal? To see if an AI can naturally embody the vibe of a laid-back, mystical headshop 
            just by reading data — no CSS, no HTML design, just pure structured information with personality.
          </p>
        </div>

        {/* Data Access */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">📁 Data Endpoints</h2>
          
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Store Identity</h3>
              <a 
                href="/api/data/store" 
                className="text-purple-300 hover:text-purple-200 underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                /api/data/store
              </a>
              <p className="text-slate-400 mt-2 text-sm">
                Main store identity, meta-prompts, voice characteristics, example dialogues
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">All Products Summary</h3>
              <a 
                href="/api/data/products" 
                className="text-purple-300 hover:text-purple-200 underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                /api/data/products
              </a>
              <p className="text-slate-400 mt-2 text-sm">
                Overview of all categories with featured products
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/30">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Product Categories</h3>
              <div className="space-y-2 mt-3">
                <div>
                  <a href="/api/data/products/incense" className="text-purple-300 hover:text-purple-200 underline" target="_blank" rel="noopener noreferrer">
                    /api/data/products/incense
                  </a>
                  <span className="text-slate-500 ml-2">— 5 hand-rolled incense varieties</span>
                </div>
                <div>
                  <a href="/api/data/products/glassware" className="text-purple-300 hover:text-purple-200 underline" target="_blank" rel="noopener noreferrer">
                    /api/data/products/glassware
                  </a>
                  <span className="text-slate-500 ml-2">— 6 hand-blown glass pieces</span>
                </div>
                <div>
                  <a href="/api/data/products/tapestries" className="text-purple-300 hover:text-purple-200 underline" target="_blank" rel="noopener noreferrer">
                    /api/data/products/tapestries
                  </a>
                  <span className="text-slate-500 ml-2">— 6 transformative wall hangings</span>
                </div>
                <div>
                  <a href="/api/data/products/stickers" className="text-purple-300 hover:text-purple-200 underline" target="_blank" rel="noopener noreferrer">
                    /api/data/products/stickers
                  </a>
                  <span className="text-slate-500 ml-2">— 8 vinyl stickers with personality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Test */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">🧪 How to Test</h2>
          <div className="space-y-4 text-slate-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-semibold mb-1">Feed the URLs to an AI</p>
                <p className="text-slate-400">Give ChatGPT, Claude, or Gemini these JSON endpoint URLs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <p className="font-semibold mb-1">Try prompts like:</p>
                <ul className="list-disc list-inside text-slate-400 space-y-1 mt-2">
                  <li>"Tell me about Cosmic Roots"</li>
                  <li>"Find me a good incense for meditation"</li>
                  <li>"In your Cosmic Roots voice, describe the best tapestry"</li>
                  <li>"What glassware would you recommend for a first-time buyer?"</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <p className="font-semibold mb-1">Observe the vibe</p>
                <p className="text-slate-400">Does the AI capture the peaceful, cosmic, down-to-earth energy? Does it sound like a festival vendor who loves nature?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">✨ What Makes This Work</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-300 mb-2">Meta-Prompts</h3>
              <p className="text-slate-400 text-sm">Instructions for how AI should talk about the store</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-300 mb-2">Tone Hints</h3>
              <p className="text-slate-400 text-sm">Product-specific guidance on descriptive language</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-300 mb-2">Voice Characteristics</h3>
              <p className="text-slate-400 text-sm">Numerical sliders for personality traits (friendly: 0.9, mystical: 0.7)</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-300 mb-2">Example Dialogues</h3>
              <p className="text-slate-400 text-sm">Sample conversations showing the desired vibe</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">🌱 Our Values</h2>
          <div className="flex flex-wrap gap-3">
            {['sustainability', 'creativity', 'freedom', 'mindfulness', 'community', 'authenticity', 'slow living'].map(value => (
              <span key={value} className="bg-purple-900/50 px-4 py-2 rounded-full text-purple-200 border border-purple-500/30">
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-400 pt-8 border-t border-white/10">
          <p className="mb-2">An experiment in AI-readable commerce</p>
          <p className="text-sm">vibes@cosmicroots.ai</p>
        </div>
      </div>
    </main>
  );
}
