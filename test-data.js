#!/usr/bin/env node

/**
 * Validates all JSON data files for schema consistency
 * Run with: node test-data.js
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const categories = ['glassware', 'incense', 'tapestries', 'stickers'];

console.log('🧪 Validating Cosmic Roots v2 Data...\n');

let errors = 0;

// Test store.json
try {
  const store = JSON.parse(fs.readFileSync(path.join(dataDir, 'store.json'), 'utf8'));
  console.log('✅ store.json - Valid');
  console.log(`   Store: ${store.store_name}`);
  console.log(`   Tagline: ${store.tagline}\n`);
} catch (e) {
  console.error('❌ store.json - Invalid:', e.message);
  errors++;
}

// Test each category
categories.forEach(category => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(dataDir, `${category}.json`), 'utf8'));
    console.log(`✅ ${category}.json - Valid`);
    console.log(`   Products: ${data.products.length}`);
    
    // Validate each product has required fields
    data.products.forEach(p => {
      const required = ['id', 'name', 'price_usd', 'image', 'description'];
      const missing = required.filter(field => !p[field]);
      if (missing.length > 0) {
        console.error(`   ⚠️  Product ${p.id || 'unknown'} missing: ${missing.join(', ')}`);
        errors++;
      }
    });
    
    console.log('');
  } catch (e) {
    console.error(`❌ ${category}.json - Invalid:`, e.message);
    errors++;
  }
});

// Test sitemap
try {
  const sitemap = JSON.parse(fs.readFileSync(path.join(dataDir, 'sitemap.json'), 'utf8'));
  console.log('✅ sitemap.json - Valid');
  console.log(`   Endpoints: ${sitemap.endpoints.length}\n`);
} catch (e) {
  console.error('❌ sitemap.json - Invalid:', e.message);
  errors++;
}

// Check images exist
console.log('📸 Checking placeholder images...\n');
let imageErrors = 0;

categories.forEach(category => {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, `${category}.json`), 'utf8'));
  data.products.forEach(p => {
    const imagePath = path.join(__dirname, 'public', p.image);
    if (!fs.existsSync(imagePath)) {
      console.error(`   ❌ Missing image: ${p.image}`);
      imageErrors++;
    }
  });
});

if (imageErrors === 0) {
  console.log('✅ All product images found!\n');
} else {
  console.log(`⚠️  ${imageErrors} images missing. Run: python3 generate_images.py\n`);
}

// Summary
console.log('═══════════════════════════════════════');
if (errors === 0 && imageErrors === 0) {
  console.log('✨ All tests passed! Ready to deploy.');
} else {
  console.log(`⚠️  Found ${errors} data errors and ${imageErrors} missing images.`);
  process.exit(1);
}
console.log('═══════════════════════════════════════');
