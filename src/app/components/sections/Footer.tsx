"use client"

import Image from "next/image"
import { useT } from "../../context/LanguageContext"

export default function Footer() {
  const t = useT()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/thuki-logo.png"
                alt="Mate logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-semibold">Mate 2.0</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2">
              {t.footer.productLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-mate-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.community}</h4>
            <ul className="space-y-2">
              {t.footer.communityLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-mate-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              {t.footer.legalLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-mate-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; {currentYear} {t.footer.copyright.replace("2026", String(currentYear)).replace("2026", String(currentYear))}</p>
          <p className="text-xs text-white/20">{t.footer.builtBy}</p>
        </div>
      </div>
    </footer>
  )
}
