import { formatSum } from '@/lib/utils.js'
import { STATS } from '@/constants/content.js'
import { useCountUp } from '@/hooks/useCountUp.js'

/**
 * Ko'rsatkichlar lentasi.
 *
 * Maketda ikki xil ko'rinish bor va ular shunchaki "torayish" emas:
 *   • keng ekran — BITTA oq kartochka (ramka #E5E5E5), ustunlar ingichka
 *     chiziq bilan ajratilgan, raqam 34/42, −1px;
 *   • tor ekran  — 2×2 ALOHIDA kulrang (#FAFAFA) kartochkalar, chiziqsiz,
 *     raqam 24/32, −0.6px.
 * Yorliq ikkalasida ham 14/20 Medium, rangi fg-muted.
 */
export default function Stats() {
  return (
    <section className="bg-surface px-4 py-10 sm:px-6 md:py-14">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Tor ekran: 2×2 kulrang kartochkalar */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-raised px-4 py-6 text-center">
              <StatValue stat={stat} className="text-[24px] leading-8 tracking-[-0.6px]" />
              <p className="mt-1.5 text-[14px] leading-5 font-medium text-faint">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Keng ekran: bitta ramkali kartochka, ustunlar orasida chiziq */}
        <div className="hidden rounded-3xl border border-line bg-panel md:block">
          <div className="grid grid-cols-4">
            {STATS.map((stat) => (
              // Ajratgich `divide-x` EMAS: maketda chiziq kartochkani to'liq
              // kesib o'tmaydi, balki o'rtada, matn balandligicha turadi.
              // Shuning uchun har bir ustunga (birinchisidan tashqari) o'z
              // `::before` chizig'i qo'yilgan.
              <div
                key={stat.label}
                className="relative px-6 py-10 text-center before:absolute before:top-1/2 before:left-0 before:h-[68px] before:w-px before:-translate-y-1/2 before:bg-line first:before:hidden"
              >
                <StatValue stat={stat} className="text-[34px] leading-[42px] tracking-[-1px]" />
                <p className="mt-2 text-[14px] leading-5 font-medium text-faint">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Bitta raqam — ekranga kirganda 0 dan o'z qiymatigacha sanaydi. */
function StatValue({ stat, className }) {
  const [ref, value] = useCountUp(stat.value)

  return (
    <p
      ref={ref}
      // `tabular-nums` — sanoq paytida raqam kengligi o'zgarmasin, aks holda
      // matn chapga-o'ngga sakraydi.
      className={`font-extrabold text-ink tabular-nums ${className}`}
    >
      {formatSum(value)}
      {stat.suffix}
    </p>
  )
}
