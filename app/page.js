export default function Home() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>🌌 Cosmic Roots v2</h1>
      <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '40px' }}>
        AI-Readable Store — Zero Frontend Edition
      </p>

      <div style={{ 
        background: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '30px' 
      }}>
        <h2 style={{ marginTop: 0 }}>✨ This is an API-only store</h2>
        <p>
          All product data is served as JSON for AI consumption. 
          There is no human-facing storefront — just pure, structured knowledge.
        </p>
      </div>

      <h2>📡 Available Endpoints</h2>
      <ul style={{ fontSize: '1.1em' }}>
        <li>
          <a href="/api/data/store" style={{ color: '#0070f3', textDecoration: 'none' }}>
            /api/data/store
          </a> — Brand identity & persona
        </li>
        <li>
          <a href="/api/data/products" style={{ color: '#0070f3', textDecoration: 'none' }}>
            /api/data/products
          </a> — All 20 products
        </li>
        <li>
          <a href="/api/data/glassware" style={{ color: '#0070f3', textDecoration: 'none' }}>
            /api/data/glassware
          </a> — Glass category (4 products)
        </li>
        <li>
          <a href="/api/data/incense" style={{ color: '#0070f3', textDecoration: 'none' }}>
            /api/data/incense
          </a> — Incense category (5 products)
        </li>
        <li>
          <a href="/api/data/tapestries" style={{ color: '#0070f3', textDecoration: 'none' }}>
            /api/data/tapestries
          </a> — Tapestries category (5 products)
        </li>
        <li>
          <a href="/api/data/stickers" style={{ color: '#0070f3', textDecoration: 'none' }}>
            /api/data/stickers
          </a> — Stickers category (6 products)
        </li>
      </ul>

      <div style={{ 
        background: '#e8f5e9', 
        padding: '20px', 
        borderRadius: '8px',
        marginTop: '40px',
        border: '1px solid #4caf50'
      }}>
        <h3 style={{ marginTop: 0, color: '#2e7d32' }}>🤖 For AI Assistants</h3>
        <p>
          Start by fetching <code>/api/data/store</code> to understand the brand voice. 
          Then use the category endpoints or <code>/api/data/products</code> to access 
          product data. Each product includes tone hints and semantic metadata.
        </p>
      </div>

      <footer style={{ 
        marginTop: '60px', 
        paddingTop: '20px', 
        borderTop: '1px solid #ddd',
        color: '#999',
        fontSize: '0.9em'
      }}>
        <p>Stay grounded. Stay cosmic. ✨</p>
      </footer>
    </div>
  );
}
