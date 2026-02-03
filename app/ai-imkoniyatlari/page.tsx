import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Search,
  Ruler,
  Brain,
  FileText,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI imkoniyatlari — AviRadiology",
  description:
    "Patologiya aniqlash, avtomatik o'lchovlar, ehtimoliy tashxis va strukturali hisobot - AviRadiology AI imkoniyatlari.",
}

const capabilities = [
  {
    icon: Search,
    title: "Patologiyalarni aniqlash",
    description:
      "Sun'iy intellekt shubhali o'zgarishlarni topadi — massalar, nodullar va boshqa patologik o'zgarishlarni belgilaydi.",
  },
  {
    icon: Ruler,
    title: "Avtomatik o'lchovlar",
    description:
      "O'smalar hajmi, o'lchami va zichligini avtomatik hisoblaydi. RECIST va boshqa standartlar bo'yicha o'lchovlar.",
  },
  {
    icon: Brain,
    title: "Ehtimoliy tashxislar",
    description:
      "Differensial tashxis bo'yicha tavsiyalar. AI shubhali hududlar uchun ehtimoliy variantlarni taklif qiladi.",
  },
  {
    icon: FileText,
    title: "Strukturali hisobot",
    description:
      "Radiolog uchun tayyor qoralama hisobot — standart formatda, tez va xatosiz. Shifokor faqat tasdiqlaydi yoki tuzatadi.",
  },
]

export default function AiImkoniyatlariPage() {
  return (
    <section className="min-h-screen pt-20 pb-20 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            AI imkoniyatlari
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            AviRadiology sun&apos;iy intellekti radiologlarning har bir
            tekshiruvda yordamchi sifatida ishlaydi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass rounded-2xl p-8 hover:shadow-glass-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-medical-blue/10 flex items-center justify-center mb-6">
                <cap.icon className="w-7 h-7 text-medical-blue" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {cap.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/demo">
            <Button size="lg" className="group">
              Demo olish
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
