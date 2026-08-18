import { CTA } from '@/constants/content.js'
import { Reveal } from '@/components/ui/Section.jsx'

/**
 * Yakuniy chaqiruv lentasi.
 *
 * Do'kon tugmalari maketda LOGOTIPSIZ: ustida kichik kulrang izoh
 * ("iOS uchun"), ostida qalin qora nom ("App Store"). Ikkalasi ham oq,
 * ya'ni ko'k fonda bir xil og'irlikda turadi.
 */
export default function CtaBanner() {
  return (
    <section id="yuklab-olish" className="scroll-mt-24 bg-surface px-4 pb-16 sm:px-6 md:pb-24">
      <Reveal className="mx-auto w-full max-w-[1200px]">
        <div className="rounded-3xl bg-brand px-6 py-14 text-center sm:px-10 md:py-20">
          <h2 className="mx-auto max-w-3xl text-[26px] leading-[1.16] font-extrabold tracking-[-0.8px] text-white sm:text-[34px] md:text-[42px]">
            {CTA.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] text-white/85 sm:text-[17px]">
            {CTA.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {CTA.stores.map((store) => (
              <a
                key={store.name}
                href="#top"
                className="rounded-2xl bg-white px-8 py-3 text-center transition-opacity hover:opacity-90"
              >
                <span className="block text-[13px] text-[#5b6474]">{store.caption}</span>
                <span className="block text-[17px] font-bold text-[#0a0a0a]">{store.name}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
