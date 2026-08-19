import { HERO } from '@/constants/content.js'
import { HERO_PHONE } from '@/constants/media.js'
import Button from '@/components/ui/Button.jsx'
import Icon from '@/components/ui/Icon.jsx'
import { Reveal } from '@/components/ui/Section.jsx'

/**
 * Bosh ekran.
 *
 * Maketda tor va keng ekran uchun IKKI XIL yechim bor — shunchaki
 * torayish emas:
 *
 *   tor ekran (32/40)                 keng ekran (56/64)
 *   ─────────────────────────         ─────────────────────────
 *   hamma narsa markazda              chapga tekislangan
 *   nishon va matn qisqargan          to'liq matn
 *   tugmalar to'liq kenglikda         yonma-yon, o'z kengligida
 *   ro'yxat YO'Q                      uchta band ko'rinadi
 *   telefon TO'LIQ (menyusi bilan)    bo'lim pastidan kesilgan
 *
 * Oxirgi qator muhim: telefon ikkita ALOHIDA rasm (`HERO_PHONE`), bitta
 * rasmning ikki o'lchami emas. Shuning uchun `<picture>` — brauzer faqat
 * keragini yuklaydi.
 *
 * Chegara `lg` emas, `wide` (1180px): maketning keng holati 1200px kadrda
 * chizilgan va 1024px da telefon bilan matn bir qatorga sig'masdi.
 *
 * Qiymatlar Figmadan aynan olingani uchun [] ichida yozilgan: nishon 32px
 * baland / 14px yon to'ldirish, sarlavha −1px (tor) va −1.8px (keng)
 * letter-spacing, tugmalar 52px, keng holatda yuqoridan 180px bo'shliq va
 * pastdan 0 — telefon bo'lim chetiga tegib, kesilgan holda turadi.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="bg-raised px-4 pt-10 pb-14 sm:px-6 md:pt-16 md:pb-20 wide:pt-[180px] wide:pb-0"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 text-center wide:grid-cols-[minmax(0,1fr)_auto] wide:items-start wide:gap-12 wide:text-left">
        <Reveal>
          <span className="inline-flex h-8 items-center rounded-full bg-brand-soft px-3.5 text-[14px] leading-5 font-medium text-on-soft">
            <span className="wide:hidden">{HERO.badgeShort}</span>
            <span className="hidden wide:inline">{HERO.badge}</span>
          </span>

          <h1 className="mx-auto mt-6 max-w-[560px] text-[32px] leading-[40px] font-extrabold tracking-[-1px] text-ink sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] wide:mx-0 wide:mt-7 wide:text-[56px] wide:leading-[64px] wide:tracking-[-1.8px]">
            {HERO.title}
          </h1>

          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[24px] text-muted wide:mx-0 wide:mt-6 wide:max-w-[560px] wide:text-[18px] wide:leading-[30px]">
            <span className="wide:hidden">{HERO.descriptionShort}</span>
            <span className="hidden wide:inline">{HERO.description}</span>
          </p>

          {/* Maketda tugma matnidan oldin kichik ikonka turadi. */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 wide:mt-8 wide:justify-start">
            <Button
              as="a"
              href="#yuklab-olish"
              variant="primary"
              size="xl"
              className="w-full sm:w-auto"
            >
              <Icon name="userPlus" size={18} strokeWidth={2.1} />
              {HERO.primaryCta}
            </Button>
            <Button as="a" href="#qanday-ishlaydi" size="xl" className="w-full sm:w-auto">
              <Icon name="playCircle" size={18} strokeWidth={2} />
              {HERO.secondaryCta}
            </Button>
          </div>

          {/* Ro'yxat faqat keng maketda — tor ekran maketida u umuman yo'q. */}
          <ul className="mt-8 hidden flex-wrap gap-x-7 gap-y-3 wide:flex">
            {HERO.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[14px] leading-5 font-medium text-faint"
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="flex justify-center wide:justify-end">
          {/*
            Telefon — sahifadagi ENG KATTA rasm, ya'ni LCP elementi: shuning
            uchun `lazy` emas, aksincha `eager` va yuqori ustuvorlik bilan.
            `width`/`height` esa brauzer joyni oldindan ajratishi uchun —
            aks holda rasm kelganda maket sakraydi.
          */}
          <picture>
            <source
              media="(min-width: 73.75rem)"
              srcSet={HERO_PHONE.wide.src}
              width={HERO_PHONE.wide.width}
              height={HERO_PHONE.wide.height}
            />
            <img
              src={HERO_PHONE.narrow.src}
              width={HERO_PHONE.narrow.width}
              height={HERO_PHONE.narrow.height}
              alt={HERO_PHONE.alt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-[288px] max-w-full wide:w-[499px]"
            />
          </picture>
        </Reveal>
      </div>
    </section>
  )
}
