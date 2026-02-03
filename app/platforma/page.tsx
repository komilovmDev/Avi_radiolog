import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Brain,
  ImageIcon,
  Workflow,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Platforma haqida — AviRadiology",
  description:
    "AviRadiology platformasi - DICOM tasvirlari bilan ishlash, klinik jarayonlarga mos tizim.",
}

const features = [
  {
    icon: Brain,
    title: "AI radiologni almashtirmaydi, balki yordam beradi",
    description:
      "Sun'iy intellekt radiologning qarorlarini qabul qilmaydi — faqat tavsiyalar beradi. Yakuniy diagnostika har doim shifokorga tegishli.",
  },
  {
    icon: ImageIcon,
    title: "DICOM tasvirlari bilan ishlash",
    description:
      "CT, MRI va boshqa DICOM formatidagi tibbiy tasvirlarni tahlil qilish. Standart PACS tizimlari bilan to'liq moslashuvchan.",
  },
  {
    icon: Workflow,
    title: "Klinik ish jarayoniga moslashgan tizim",
    description:
      "Mavjud klinik workflow'ga integratsiya. Radiologlar o'z odatiy muhitida qoladi — faqat AI yordamchi qo'shiladi.",
  },
]

export default function PlatformaPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            AviRadiology nima?
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Radiologlar uchun yangi avlod sun&apos;iy intellekt yordamchisi —
            DICOM tasvirlarini tahlil qiladi, shubhali joylarni belgilaydi va
            hisobot tayyorlashda yordam beradi.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-8 hover:shadow-glass-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-medical-blue/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-medical-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/demo">
            <Button size="lg" className="group">
              Demo so&apos;rash
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
