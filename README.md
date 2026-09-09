# Paint Remix Lab

A private, client-only decision aid for exploring how a gallon of PPG Vining Ivy might be nudged toward the existing Sharkskin + Saw Mill basement palette. It is **not** a tint-formula generator. All recipes are conceptual ratios to test in compatible paint.

## Start locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173`). For a production check:

```bash
npm test
npm run build
npm run preview
```

No login, backend, API key, analytics, or network request is used at runtime.

## Color references and uncertainty

All editable source colors and additive assumptions live in [`src/data/basementPalette.ts`](src/data/basementPalette.ts). PPG names/codes are separated from estimated screen coordinates. At the time of this build, access to PPG's current color pages was unavailable in the build environment; consequently no digital value is labeled manufacturer-verified. Replace an estimate when a current physical PPG chip or official page is available.

## Methodology

1. sRGB colors are linearized, converted to OKLab, and mixed there rather than averaged directly as gamma-encoded RGB.
2. The additive ratio is `additive ounces / (base ounces + additive ounces)`. A user-entered total-mixture percentage is converted back to additive ounces.
3. Test batches preserve the recipe's additive-to-base ratio. An “8 oz test” means 8 oz of Vining Ivy base plus the scaled additive—not 8 oz total mixture.
4. Advisory scoring combines restrained change from the owned paint, proximity to both room colors, chroma reduction, lightness fit, and a warm botanical undertone preference. The UI exposes the component scores.
5. Pigments mix subtractively and non-linearly; OKLab interpolation is only a visual direction. Product chemistry, base, sheen, pigment strength, light, substrate, film thickness, and drying all matter.

See [`PAINT_TESTING_GUIDE.md`](PAINT_TESTING_GUIDE.md) before touching the gallon.
