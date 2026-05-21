# Hobby images

Five PNG files for the "Outside work" section on the About page.

| File | Hobby |
|------|-------|
| `golf.png` | Golf |
| `pickleball.png` | Pickleball |
| `climbing.png` | Climbing |
| `lion-dance.png` | Lion Dance |
| `dragon-boat.png` | Dragon Boat |

If you change a filename or want to add a 6th, update `lib/content.ts` → `hobbies` array.

## Replacing an image

Just save a new file at the same path. The About page picks it up on the next dev-server reload.

## Recommended specs

- **Format**: PNG with transparent background (SVG also works — change `.png` to `.svg` in `content.ts`)
- **Size**: ~256–512px on the long edge
- **Color**: any. The current set is processed to gold `#ffd700` on transparent so they match the brand. If you swap in a multi-color image, it'll render in its native colors on the dark surface.

## Re-processing originals to gold

If you want to add a new hobby image and convert it to match the gold theme, use a small Python script with PIL + numpy:

- Compute luminance `0.299*R + 0.587*G + 0.114*B`
- If source has white background: `alpha = (255 - lum) / 255`
- If source has black background: `alpha = lum / 255`
- Multiply alpha by ~1.3-1.5 to boost opacity, clip to 0-255
- Set RGB channels to `(255, 215, 0)`, use computed alpha
- Auto-crop transparent borders
