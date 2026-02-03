"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

// Manzil — Yoshlar Texno Parki, Urgench
const OFFICE_ADDRESS = "Yoshlar Texno Parki, Urgench, Xorazm"
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.68535920821!2d60.62634641287143!3d41.584951691867076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfcf0007ad54e3%3A0xda4a62406edd56c7!2sYoshlar%20Texno%20Parki!5e1!3m2!1sen!2sus!4v1770154581358!5m2!1sen!2sus"
const MAP_LINK_URL = "https://www.google.com/maps/search/?api=1&query=Yoshlar+Texno+Parki+Urgench"

const footerLinks = {
  platform: [
    { href: "/platforma", label: "Platforma haqida" },
    { href: "/ai-imkoniyatlari", label: "AI imkoniyatlari" },
    { href: "/integratsiyalar", label: "Integratsiyalar" },
  ],
  company: [
    { href: "/klinikalar", label: "Klinikalar uchun" },
    { href: "/xavfsizlik", label: "Xavfsizlik" },
    { href: "/kompaniya", label: "Kompaniya haqida" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 lg:pt-20 pb-8 mt-auto shrink-0 border-t border-slate-700">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo href="/" variant="dark" size="lg" className="mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Radiologlar uchun yangi avlod sun&apos;iy intellekt yordamchisi.
              DICOM tahlil, patologiya aniqlash va hisobot yordamchisi.
            </p>
            <Link href="/demo">
              <Button
                variant="secondary"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                Demo so&apos;rash
              </Button>
            </Link>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platforma</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-medical-blue-light transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kompaniya</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-medical-blue-light transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="font-semibold text-white mb-4">Bog&apos;lanish</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:abdula_9146@icloud.com"
                  className="text-slate-400 hover:text-medical-blue-light transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  abdula_9146@icloud.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+998958500880"
                  className="text-slate-400 hover:text-medical-blue-light transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                    +998 95 850 08 80
                </a>
              </li>
              <li>
                <a
                  href={MAP_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-medical-blue-light transition-colors flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{OFFICE_ADDRESS}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Map */}
        <div className="mb-12 lg:mb-16">
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-medical-blue-light" />
            Manzil
          </h4>
          <div className="rounded-xl overflow-hidden border border-slate-700 h-48 sm:h-56 lg:h-64">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AviRadiology manzil - Yoshlar Texno Parki, Urgench"
              className="min-h-[192px] sm:min-h-[224px] lg:min-h-[256px]"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AviRadiology. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/xavfsizlik"
              className="text-slate-500 hover:text-slate-400 transition-colors"
            >
              Maxfiylik
            </Link>
            <Link
              href="/demo"
              className="text-slate-500 hover:text-slate-400 transition-colors"
            >
              Demo so&apos;rash
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
