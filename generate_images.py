from PIL import Image, ImageDraw, ImageFont
import os

# Product images to generate
products = {
    "glassware": [
        ("galaxy-pipe.jpg", "Spiral Galaxy\nPipe", (75, 50, 150)),
        ("moonstone-bubbler.jpg", "Moonstone\nBubbler", (200, 200, 220)),
        ("amber-forest-spoon.jpg", "Amber Forest\nSpoon", (150, 100, 50)),
        ("celestial-rig.jpg", "Celestial\nRig", (230, 230, 250))
    ],
    "incense": [
        ("palo-santo.jpg", "Palo Santo\nSticks", (139, 90, 60)),
        ("nag-champa.jpg", "Nag Champa\nCones", (178, 140, 190)),
        ("sage-cedar.jpg", "Sage & Cedar\nBundle", (100, 120, 90)),
        ("lavender-dream.jpg", "Lavender Dream\nSticks", (180, 150, 200)),
        ("dragons-blood.jpg", "Dragon's Blood\nResin", (120, 30, 30))
    ],
    "tapestries": [
        ("mandala-sunset.jpg", "Mandala\nSunset", (255, 140, 80)),
        ("tree-of-life.jpg", "Tree of\nLife", (60, 120, 70)),
        ("moon-phases.jpg", "Moon\nPhases", (40, 40, 50)),
        ("galaxy-swirl.jpg", "Galaxy\nSwirl", (70, 50, 120)),
        ("chakra-alignment.jpg", "Chakra\nAlignment", (200, 100, 150))
    ],
    "stickers": [
        ("third-eye.jpg", "Third Eye\nHolographic", (75, 0, 130)),
        ("mushroom-spirit.jpg", "Mushroom\nSpirit", (180, 70, 60)),
        ("stay-grounded.jpg", "Stay\nGrounded", (120, 100, 80)),
        ("cosmic-cactus.jpg", "Cosmic\nCactus", (80, 140, 100)),
        ("moon-goddess.jpg", "Moon\nGoddess", (255, 215, 100)),
        ("peace-mandala.jpg", "Peace Sign\nMandala", (255, 180, 100))
    ]
}

base_path = "/home/claude/cosmic-roots-v2/public/images"

for category, items in products.items():
    category_path = os.path.join(base_path, category)
    os.makedirs(category_path, exist_ok=True)
    
    for filename, text, color in items:
        # Create image
        img = Image.new('RGB', (800, 600), color=color)
        draw = ImageDraw.Draw(img)
        
        # Try to use a nice font, fall back to default if not available
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)
        except:
            font = ImageFont.load_default()
        
        # Calculate text position (centered)
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (800 - text_width) / 2
        y = (600 - text_height) / 2
        
        # Add subtle gradient effect by drawing semi-transparent rectangles
        for i in range(0, 600, 20):
            alpha_overlay = Image.new('RGBA', (800, 600), (255, 255, 255, 3))
            img.paste(alpha_overlay, (0, 0), alpha_overlay)
        
        # Draw text with shadow
        shadow_offset = 4
        draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=(0, 0, 0, 128), align="center")
        draw.text((x, y), text, font=font, fill=(255, 255, 255), align="center")
        
        # Add decorative border
        draw.rectangle([(10, 10), (790, 590)], outline=(255, 255, 255, 180), width=3)
        
        # Save image
        filepath = os.path.join(category_path, filename)
        img.save(filepath, quality=85)
        print(f"Created: {filepath}")

print(f"\n✨ Generated {sum(len(items) for items in products.values())} placeholder images!")
