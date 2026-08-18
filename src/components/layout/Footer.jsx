import { currentYear } from '@/lib/utils.js'
import { BRAND, FOOTER } from '@/constants/content.js'
import Logo from '@/components/brand/Logo.jsx'

/**
 * Footer.
 *
 * Maketda ustunlar TOR EKRANDA ham uchtaligicha qoladi (havolalar qisqa),
 * shuning uchun `grid-cols-3` mobil holat uchun ham, keng ekranda esa
 * chapga brend ustuni qo'shiladi.
 */
export default function Footer() {
  return (
    <footer className="border-t border-line bg-raised px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="md:grid md:grid-cols-[1.5fr_repeat(3,1fr)] md:gap-10">
          <div className="max-w-sm">
            <Logo short size="lg" href="#top" />
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{FOOTER.about}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-3 md:mt-0 md:gap-10">
            {FOOTER.columns.map((column) => (
              <div key={column.title}>
                <p className="text-[15px] font-semibold text-ink">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] wrap-break-word text-muted transition-colors hover:text-brand md:text-[15px]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-14">
          <p className="text-[14px] text-muted">
            © {currentYear} {BRAND.short}. Barcha huquqlar himoyalangan.
          </p>

          <div className="flex flex-wrap gap-6">
            {FOOTER.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] text-muted transition-colors hover:text-brand"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
