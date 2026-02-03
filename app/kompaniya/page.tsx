import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Cpu, Handshake, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Kompaniya haqida — AviRadiology",
  description:
    "AviRadiology missiyasi, texnologik yo'nalish va hamkorlik imkoniyatlari.",
}

const values = [
  {
    icon: Target,
    title: "Missiya",
    description:
      "Radiologlarni sun'iy intellekt bilan quvvatlash — diagnostika aniqligini oshirish, xatolarni kamaytirish va bemorga yaxshiroq yordam berish. Har bir radiolog AI yordamchiga ega bo'lishi kerak.",
  },
  {
    icon: Cpu,
    title: "Texnologik yo'nalish",
    description:
      "Deep learning va computer vision bo'yicha tadqiqotlar. Tibbiy tasvirlashda zamonaviy AI usullarini qo'llash. Doimiy rivojlanish va model optimizatsiyasi.",
  },
  {
    icon: Handshake,
    title: "Hamkorlik uchun ochiqlik",
    description:
      "Klinikalar, tadqiqot markazlari va hamkorlar bilan ochiq hamkorlik. Demo, piloted loyihalar va texnik integratsiya bo'yicha qo'llab-quvvatlash.",
  },
]

export default function KompaniyaPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Kompaniya haqida
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            AviRadiology — radiologiya va sun&apos;iy intellekt chorrahasida
            yangi yechimlar yaratamiz.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="glass rounded-2xl p-10 hover:shadow-glass-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-medical-blue/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-medical-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                    {value.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/demo">
            <Button size="lg" className="group">
              Hamkorlik uchun bog&apos;lanish
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
