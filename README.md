# Raqamli Sovchi — landing

Nikoh uchun jiddiy tanishuv ilovasining bir sahifali (landing) sayti.
Stek `unusual-consumption-frontend` loyihasidan olingan: Vite + React 19 +
Tailwind CSS v4 (`@theme inline` tokenlari), `lucide-react` va
`@hugeicons/core-free-icons` ikonkalari, `cn()` (clsx + tailwind-merge).

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # dist/
npm run preview  # qurilgan versiyani ko'rish
npm run lint
npm run format
```

Node >= 20.19 (`.nvmrc` — 22).

## Tuzilma

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Sahifa bo'limlari (Hero, Steps, Pricing, Faq, ...)
    brand/      BrandMark, Logo, BrandIcons (tashqi nishonlar)
    ui/         Button, Section, Icon, HugeIcon, AppShot
  constants/    content.js (BARCHA matn), icons.js (ikonka ro'yxati), media.js
  hooks/        useReveal (skroll animatsiyasi), useCountUp (jonli raqamlar)
  lib/          utils.js (cn, formatSum, initials), queryClient.js
  pages/        Landing.jsx, NotFound.jsx
  styles/       index.css — rang tokenlari va bazaviy qatlam
```

## Ranglar

Ranglar komponentlarda hex bilan yozilmaydi. Har bir rang `styles/index.css`
dagi `@theme inline` blokida NOM oladi (`--color-brand`, `--color-ink`,
`--color-line`, ...), qiymati esa `:root` (kunduzgi) va `.dark` (tungi)
bloklarida turadi. Shuning uchun `bg-brand`, `text-muted`, `border-line`
klasslari ikkala mavzuda ham o'zi to'g'ri ishlaydi.

Yangi rang kerak bo'lsa: `@theme inline` ga nom, IKKALA mavzu blokiga qiymat.

## Mavzu

Sayt Figma maketiga mos ravishda KUNDUZGI rejimda ochiladi. Tungi palitra
`styles/index.css` dagi `.dark` blokida tayyor turibdi, lekin maketda
almashtirish tugmasi yo'q — shuning uchun interfeysda ham yo'q. Kerak bo'lsa
`localStorage.theme = 'dark'` bilan yoqiladi.

## Jonli raqamlar

Ko'rsatkichlar bo'limidagi sonlar ekranga kirganda 0 dan sanaladi
(`hooks/useCountUp.js`). Bir marta ishlaydi va `prefers-reduced-motion`
yoqilganda umuman animatsiya qilmaydi.

## Logotip va ikonkalar

Belgi va so'z belgisi dizayner fayllaridan olingan: `public/Logo.svg` (to'liq
lockup) va `public/logoIcon.svg` (plitkali belgi). React tomonida ular
`src/components/brand/` da — `BrandMark` (belgi, 4 o'lcham × 4 ohang) va
`Logo` (lockup, `tone="inverse"` ko'k fon uchun). Brend ko'ki `#0474F3` —
aynan logotip faylidagi qiymat.

Ikonkalar bitta ro'yxatda: `src/constants/icons.js`. `lucide-react` va
`@hugeicons/core-free-icons` aralash ishlatiladi, farqni `<Icon name="..." />`
yopadi — chaqiruvchi kod faqat ma'noni ataydi (`curtain`, `guardian`,
`verified`). Tashqi brendlar (Telegram, App Store, Google Play, to'lov
tizimlari) — `src/components/brand/BrandIcons.jsx`.

Hammasi bitta sahifada ko'rinadi: **`/brand`** (logotip ko'rinishlari,
ranglar, ikonka ro'yxati, yuklab olinadigan fayllar).

Generatsiya qilingan fayllar: `favicon.svg`, `icon-maskable.svg` (512px,
Android/apple-touch), `og-image.svg` (1200×630), `logo-mark.svg` (fonsiz
belgi), `site.webmanifest`. iOS uchun PNG kerak bo'lsa — shu SVG'lardan
eksport qilinadi.

## Matn

Sarlavha, tugma yozuvi, narx va savol-javoblar — hammasi
`src/constants/content.js` da. Matnni tahrirlash uchun JSX ochish shart emas.
