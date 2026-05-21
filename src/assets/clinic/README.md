# Clinic Images

This folder now includes a generated clinic image set for the current build. The homepage auto-loads images from here with `import.meta.glob`, so you usually do not need to manually edit imports.

Current included assets:

- `hero-main.png`
- `trust-certificate.png`
- `gallery-1.png` to `gallery-6.png`

You can still replace any of them later with real clinic photography using the same filenames.

Recommended names:

- `hero-main.jpg` for the hero section
- `trust-certificate.jpg` for a certificate, award, founder, or doctor image
- `logo-mark.png` for an optional logo
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` and so on for clinic/treatment/gallery images

How the app uses them:

- Files with names like `logo`, `mark`, or `brand` are used as the header logo.
- Files with names like `hero`, `cover`, `front`, `main`, or `clinic` are preferred for the hero section.
- Files with names like `certificate`, `award`, `about`, `trust`, or `doctor` are preferred for the trust/about section.
- All remaining images are shown in the gallery section.

If you want a direct import instead, the pattern looks like this:

```jsx
import heroImage from "./assets/clinic/hero-main.jpg";
```
