import { CTA } from '@/constants/content.js'
import { Reveal } from '@/components/ui/Section.jsx'

/**
 * Yakuniy chaqiruv lentasi.
 *
 * Orqa fon Figma gradienti: linear-gradient(90deg, #0474F3 0%,
 * #3391FD 49.52%, #1D83F5 100%).
 *
 * Do'kon tugmalari Figma badge'lariga mos: fon #FFFFFF1A (oq 10%),
 * hover #00000033 (qora 20%), radius 20px, chapda logotip
 * (`public/Apple.svg`, `public/Playstore.svg`), o'ngda ikki qator —
 * kichik izoh ("Download on the" / "GET IT ON") va yirik nom
 * ("App Store" / "Google Play"), hammasi oq.
 */
export default function CtaBanner() {
  return (
    <section id="yuklab-olish" className="scroll-mt-24 bg-surface px-4 pb-16 sm:px-6 md:pb-24">
      <Reveal className="mx-auto w-full max-w-[1200px]">
        <div className="rounded-3xl bg-[linear-gradient(90deg,#0474F3_0%,#3391FD_49.52%,#1D83F5_100%)] px-6 py-14 text-center sm:px-10 md:py-20">
          <h2 className="mx-auto max-w-3xl text-[26px] leading-[1.16] font-extrabold tracking-[-0.8px] text-white sm:text-[34px] md:text-[42px]">
            {CTA.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] text-white/85 sm:text-[17px]">
            {CTA.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {CTA.stores.map((store) => (
              <a
                key={store.name}
                href="#top"
                className="flex items-center gap-3 rounded-[20px] bg-[#FFFFFF1A] px-6 py-3.5 text-left ring-1 ring-inset ring-white/10 transition-colors hover:bg-[#00000033]"
              >
                <img
                  src={store.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-9 w-auto flex-shrink-0"
                />
                <span className="text-white">
                  <span className="block text-[15px] leading-none font-medium">{store.caption}</span>
                  <span className="mt-1 block text-[29px] leading-none font-semibold tracking-[-0.8px]">
                    {store.name}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
