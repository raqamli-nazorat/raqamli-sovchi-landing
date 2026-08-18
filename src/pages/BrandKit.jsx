import { Link } from 'react-router-dom'

import { BRAND } from '@/constants/content.js'
import { ICON_GROUPS } from '@/constants/icons.js'
import Button from '@/components/ui/Button.jsx'
import Icon from '@/components/ui/Icon.jsx'
import Logo from '@/components/brand/Logo.jsx'
import BrandMark from '@/components/brand/BrandMark.jsx'
import { SOCIAL_ICONS, STORE_ICONS } from '@/constants/media.js'

/** Rang tokenlari — qiymatlari `styles/index.css` da, bu yerda faqat nomlar. */
const COLORS = [
  { name: 'brand', className: 'bg-brand' },
  { name: 'brand-soft', className: 'bg-brand-soft' },
  { name: 'ink', className: 'bg-ink' },
  { name: 'muted', className: 'bg-muted' },
  { name: 'surface', className: 'bg-surface' },
  { name: 'raised', className: 'bg-raised' },
  { name: 'line', className: 'bg-line' },
  { name: 'success', className: 'bg-success' },
  { name: 'warn', className: 'bg-warn' },
  { name: 'danger', className: 'bg-danger' },
]

const FILES = [
  { href: '/Logo.svg', label: 'Logo.svg', hint: 'Asl to‘liq lockup (dizayner fayli)' },
  { href: '/logoIcon.svg', label: 'logoIcon.svg', hint: 'Asl plitkali belgi' },
  { href: '/logo-mark.svg', label: 'logo-mark.svg', hint: 'Fonsiz belgi, brend ko‘kida' },
  { href: '/favicon.svg', label: 'favicon.svg', hint: 'Brauzer ikonkasi' },
  { href: '/icon-maskable.svg', label: 'icon-maskable.svg', hint: 'Android / apple-touch, 512px' },
  { href: '/og-image.svg', label: 'og-image.svg', hint: 'Ijtimoiy tarmoq, 1200×630' },
]

/**
 * Brend sahifasi — logotip, ikonka va ranglarning yagona ro'yxati.
 *
 * Landingdan havola qilinmagan (mijoz uchun emas, jamoa uchun): manzil
 * to'g'ridan-to'g'ri `/brand`.
 */
export default function BrandKit() {
  return (
    <div className="min-h-dvh bg-surface px-4 py-14 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Logo size="lg" withTagline />
          <Button as={Link} to="/" variant="secondary" size="sm">
            <Icon name="arrowRight" size={15} className="rotate-180" />
            Landingga qaytish
          </Button>
        </div>

        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted">
          Belgi va so‘z belgisi asl <code>public/Logo.svg</code> faylidan olingan. React komponenti,
          favicon va boshqa fayllar aynan shu geometriyani takrorlaydi — belgini o‘zgartirganda
          hammasini birga yangilang.
        </p>

        {/* ── Logotip ko'rinishlari ── */}
        <Block title="Logotip">
          <div className="grid gap-4 sm:grid-cols-2">
            <Tile label="Asosiy lockup">
              <Logo size="md" />
            </Tile>
            <Tile label="Katta + shior">
              <Logo size="lg" withTagline />
            </Tile>
            <Tile label="Faqat belgi">
              <div className="flex items-end gap-3">
                <BrandMark size="sm" />
                <BrandMark size="md" />
                <BrandMark size="lg" />
                <BrandMark size="xl" />
              </div>
            </Tile>
            <Tile label="Ko‘k fon ustida" tone="brand">
              <Logo size="md" tone="inverse" />
            </Tile>
            <Tile label="Yumshoq va ramkali plitka">
              <div className="flex items-center gap-3">
                <BrandMark tone="soft" size="lg" />
                <BrandMark tone="outline" size="lg" />
              </div>
            </Tile>
            <Tile label="Eng kichik o‘lcham (16px)">
              <div className="flex items-center gap-4">
                <img src="/favicon.svg" alt="favicon 16px" className="h-4 w-4" />
                <img src="/favicon.svg" alt="favicon 24px" className="h-6 w-6" />
                <img src="/favicon.svg" alt="favicon 32px" className="h-8 w-8" />
              </div>
            </Tile>
          </div>
        </Block>

        {/* ── Ranglar ── */}
        <Block title="Ranglar">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {COLORS.map((color) => (
              <div key={color.name} className="rounded-xl border border-line bg-panel p-3">
                <div className={`h-12 w-full rounded-lg border border-line ${color.className}`} />
                <p className="mt-2 text-xs font-medium text-ink">{color.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-faint">
            Qiymatlar <code>src/styles/index.css</code> dagi <code>:root</code> va{' '}
            <code>.dark</code> bloklarida — bu yerda faqat nom.
          </p>
        </Block>

        {/* ── Ikonkalar ── */}
        {ICON_GROUPS.map((group) => (
          <Block key={group.title} title={`Ikonkalar — ${group.title}`}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {group.names.map((name) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-line bg-panel px-3 py-4"
                >
                  <Icon name={name} size={22} className="text-brand" />
                  <span className="truncate text-[11px] text-muted">{name}</span>
                </div>
              ))}
            </div>
          </Block>
        ))}

        {/* ── Tashqi brend nishonlari ── */}
        <Block title="Tashqi nishonlar">
          <div className="flex flex-wrap items-center gap-3">
            {Object.keys(SOCIAL_ICONS).map((label) => {
              const SocialIcon = SOCIAL_ICONS[label]
              return (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2 text-xs text-muted"
                >
                  <SocialIcon className="h-4.5 w-4.5" />
                  {label}
                </span>
              )
            })}
            {Object.keys(STORE_ICONS).map((label) => {
              const StoreIcon = STORE_ICONS[label]
              return (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-line bg-panel px-3 py-2 text-xs text-muted"
                >
                  <StoreIcon className="h-5 w-5 text-ink" />
                  {label}
                </span>
              )
            })}
          </div>
        </Block>

        {/* ── Fayllar ── */}
        <Block title="Fayllar">
          <div className="grid gap-3 sm:grid-cols-2">
            {FILES.map((file) => (
              <a
                key={file.href}
                href={file.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-panel px-4 py-3 transition-colors hover:border-brand/40"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-ink">{file.label}</span>
                  <span className="block truncate text-xs text-muted">{file.hint}</span>
                </span>
                <Icon name="chevronRight" size={16} className="flex-shrink-0 text-faint" />
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-faint">
            Barchasi SVG. iOS uchun PNG kerak bo‘lsa, shu fayllardan eksport qilinadi.
          </p>
        </Block>
      </div>
    </div>
  )
}

function Block({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold tracking-[0.14em] text-faint uppercase">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function Tile({ label, tone = 'plain', children }) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-5">
      <p className="text-xs text-faint">{label}</p>
      <div
        className={`mt-4 flex min-h-[88px] items-center justify-center rounded-xl px-4 py-5 ${
          tone === 'brand' ? 'bg-brand' : 'bg-raised'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
