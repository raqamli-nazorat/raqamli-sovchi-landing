import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils.js'
import { NAV_CTA, NAV_LINKS } from '@/constants/content.js'
import Button from '@/components/ui/Button.jsx'
import Icon from '@/components/ui/Icon.jsx'
import Logo from '@/components/brand/Logo.jsx'

/**
 * Sahifa sarlavhasi.
 *
 * Figmadan olingan o'lchamlar: logotip 37.76px, havolalar 15/20 Medium,
 * tugma 44px baland, yon to'ldirishi 28px, radiusi 14px. Kunduzgi/tungi
 * almashtirgich maketda YO'Q — shuning uchun bu yerda ham yo'q.
 *
 * Tor ekranda havolalar gamburger ostiga yashirinadi, tugma matni esa
 * qisqaradi ("Ilovani yuklab olish" → "Yuklab olish").
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menyu ochiq turganda orqa fon surilmasin — mobil qurilmada bu chalg'itadi.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-line bg-surface',
        scrolled && 'bg-surface/90 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center gap-2 px-4 min-[22.5rem]:gap-4 sm:px-6 wide:h-20 wide:gap-10">
        <Logo
          href="#top"
          // O‘lchandi: 390px kadrda logotip + tugma + gamburger maketdagi
          // 20px nom bilan bir qatorga sig‘maydi va sahifa yonga suriladi.
          textClassName="text-[15px] min-[22.5rem]:text-[17px] wide:text-[20px]"
        />

        <nav className="hidden items-center gap-7 wide:flex xl:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] leading-5 font-medium whitespace-nowrap text-ink transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2.5">
          <Button
            as="a"
            href="#yuklab-olish"
            variant="primary"
            size="md"
            // Yon to‘ldirish tor ekranda kichrayadi: 390px kadrda logotip,
            // tugma va gamburger maketdagi 28px bilan bir qatorga sig‘maydi.
            className="px-2.5 min-[22.5rem]:px-4 sm:px-5 wide:px-7"
          >
            {/* Eng tor ekranda ikonka yashiriladi: o‘sha yerda har piksel hisobda. */}
            <Icon name="download" size={16} strokeWidth={2.1} className="hidden sm:block" />
            <span className="wide:hidden">{NAV_CTA.short}</span>
            <span className="hidden wide:inline">{NAV_CTA.long}</span>
          </Button>

          {/* Gamburger — maketda ramkasiz, oddiy ikonka. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menyu"
            aria-expanded={open}
            className="-mr-1 flex h-10 w-10 cursor-pointer items-center justify-center text-ink wide:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} size={24} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/*
        Menyu OCHILISH ANIMATSIYASI.

        Panel doim DOM'da turadi va `grid-rows: 0fr → 1fr` bilan ochiladi —
        shu hiyla balandligi oldindan noma'lum blokni ham silliq cho'zadi
        (`height: auto` ni animatsiya qilib bo'lmaydi). Shu sabab yopilish
        ham animatsiyali: shartli render qilinganda element darrov yo'qolib,
        sakrab qolardi.

        `pointer-events-none` + `aria-hidden` — yopiq panel bosilmasin va
        skrin-riderga ko'rinmasin.
      */}
      <div
        aria-hidden={!open}
        className={cn(
          'grid overflow-hidden bg-surface transition-all duration-400 ease-out wide:hidden',
          open
            ? 'grid-rows-[1fr] border-t border-line opacity-100'
            : 'pointer-events-none grid-rows-[0fr] border-t border-transparent opacity-0',
        )}
      >
        <nav className="flex min-h-0 flex-col px-4 py-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
