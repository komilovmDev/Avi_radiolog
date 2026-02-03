import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Users,
  BarChart3,
  Video,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Klinikalar uchun — AviRadiology",
  description:
    "Bemor oqimini tezlashtirish, radiologlar yukini kamaytirish, hisobot sifatini standartlashtirish.",
}

const benefits = [
  {
    icon: Zap,
    title: "Bemor oqimini tezlashtirish",
    description:
      "Hisobotlar tezroq tayyorlanadi — bemorlar kutish vaqtini qisqartiradi, tekshiruvlar soni oshadi.",
  },
  {
    icon: Users,
    title: "Radiologlar yukini kamaytirish",
    description:
      "Rutin tahlillar va o'lchovlar AI tomonidan bajariladi. Radiologlar murakkab va shubhali holatlarga e'tibor beradi.",
  },
  {
    icon: BarChart3,
    title: "Hisobot sifatini standartlashtirish",
    description:
      "Barcha hisobotlar bir xil formatda — standartlashtirilgan, qidiruv va statistikaga mos.",
  },
  {
    icon: Video,
    title: "Telemeditsina uchun mos",
    description:
      "Bulutli va mahalliy o'rnatish. Uzoqdan konsultatsiya va teleradiologiya uchun ideal.",
  },
]

export default function KlinikalarPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Klinikalar uchun
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            AviRadiology platformasi klinikalar uchun ROI va samaradorlikni
            oshiradi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass rounded-2xl p-8 hover:shadow-glass-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-medical-blue/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-medical-blue" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {benefit.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
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
