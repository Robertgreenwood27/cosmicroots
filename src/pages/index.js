// pages/index.js
export default function Home() {
  const products = [
    {
      id: 1,
      category: "Glassware",
      name: "Galaxy Pipe",
      price: 42,
      description: "A small hand-blown pipe with swirling nebula colors. Like smoking stardust, each piece is unique with deep purples, blues, and silver accents that catch the light.",
      image: "/images/product1.png"
    },
    {
      id: 2,
      category: "Glassware",
      name: "Amber Forest Spoon",
      price: 35,
      description: "Warm amber glass with forest-green veins running through it. Feels like holding sunlight filtered through ancient woods. Smooth, ergonomic design.",
      image: "/images/product2.png"
    },
    {
      id: 3,
      category: "Incense",
      name: "Lavender Dream",
      price: 6,
      description: "A soothing blend of lavender and cedar to calm the cosmic mind. Burns clean for 45 minutes. Perfect for meditation or winding down after a long day.",
      image: "/images/product3.png"
    },
    {
      id: 4,
      category: "Incense",
      name: "Sandalwood Horizon",
      price: 8,
      description: "Earthy sandalwood with hints of spice. Grounding energy for wandering souls. This blend has been our bestseller since day one.",
      image: "/images/product4.png"
    }
  ];

  return (
    <div style={{
      margin: 0,
      background: '#0a0a0a',
      color: '#e0e0e0',
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 0,
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        
        {/* Header */}
        <header>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Cosmic Roots</h1>
          <p style={{ fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '2rem' }}>
            Where good vibes meet good smoke
          </p>
        </header>

        {/* AI Testing Notice */}
        <aside style={{
          background: '#1a1a2e',
          border: '1px solid #2a2a4e',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>ℹ️ AI Testing Experiment</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
            This is a mock storefront designed to test how AI assistants interpret and interact with 
            e-commerce websites. No real products are for sale. This experiment explores AI-readable 
            web design and structured content presentation.
          </p>
        </aside>

        {/* About */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About Us</h2>
          <p style={{ lineHeight: 1.7 }}>
            Cosmic Roots is a mystical headshop drifting through the digital cosmos. We offer 
            hand-blown glass pieces and carefully curated incense blends. Each item in our collection 
            is chosen for its craftsmanship and ability to enhance your space with peaceful, cosmic energy.
          </p>
        </section>

        {/* Products */}
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our Collection</h2>
          
          {products.map(product => (
            <article key={product.id} style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              background: '#151515',
              borderRadius: '8px',
              display: 'flex',
              gap: '1.5rem',
              flexDirection: 'row'
            }}>
              <img 
                src={product.image} 
                alt={product.name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  background: '#2a2a2a'
                }}
              />
              <div style={{ flex: 1 }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: '#888',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {product.category}
                </span>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  margin: '0.25rem 0 0.5rem 0' 
                }}>
                  {product.name}
                </h3>
                <p style={{ 
                  fontSize: '1.3rem', 
                  color: '#7fb3d5',
                  margin: '0 0 1rem 0',
                  fontWeight: '500'
                }}>
                  ${product.price}
                </p>
                <p style={{ 
                  lineHeight: 1.6,
                  color: '#c0c0c0'
                }}>
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #2a2a2a',
          fontSize: '0.9rem',
          color: '#666'
        }}>
          <p>© 2024 Cosmic Roots - AI Experiment | Not a real store</p>
        </footer>
      </div>

      {/* Background overlay image */}
      <img
        src="/images/cosmic-roots.png"
        alt="Cosmic Roots background"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}