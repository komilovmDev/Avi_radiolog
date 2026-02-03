import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Lock,
  Shield,
  ClipboardList,
  UserCheck,
  Database,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Xavfsizlik va maxfiylik — AviRadiology",
  description:
    "Ma'lumotlar shifrlash, foydalanuvchi huquqlari, harakatlar loglari - AviRadiology xavfsizligi.",
}

const securityFeatures = [
  {
    icon: Lock,
    title: "Ma'lumotlar shifrlanadi",
    description:
      "Tranzit va qotib turgan holda AES-256 shifrlash. Barcha ma'lumotlar xavfsiz kanallar orqali uzatiladi.",
  },
  {
    icon: UserCheck,
    title: "Foydalanuvchi huquqlari nazorat qilinadi",
    description:
      "Role-based access control (RBAC). Har bir foydalanuvchi faqat o'z vakolati doirasida ishlaydi.",
  },
  // {
  //   icon: ClipboardList,
  //   title: "Harakatlar loglanadi",
  //   description:
  //     "Audit trail — kim, qachon, qaysi ma'lumotlarga kirgan. Tamoyil va sertifikatlar talablariga javob beradi.",
  // },
  {
    icon: Shield,
    title: "Bemor ma'lumotlari himoyalangan",
    description:
      "GDPR, HIPAA va mahalliy tibbiy maxfiylik qonunlariga mos. Bemor ma'lumotlari maxsus himoya ostida.",
  },
  // {
  //   icon: Database,
  //   title: "AI o'qitish uchun depersonalizatsiya",
  //   description:
  //     "Modellarni o'qitishda faqat anonimlashtirilgan ma'lumotlar ishlatiladi. Shaxsiy ma'lumotlar hech qachon AI uchun ishlatilmaydi.",
  // },
]

export default function XavfsizlikPage() {
  return (
    <section className="min-h-screen pt-20 pb-20 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Xavfsizlik va maxfiylik
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Tibbiy ma'lumotlar — eng maxfiy. AviRadiology xavfsizlik standartlariga
            qat'iy rioya qiladi.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto mb-16">
          {securityFeatures.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-8 hover:shadow-glass-lg transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-medical-blue/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-medical-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/demo">
            <Button size="lg" className="group">
              Batafsil ma&apos;lumot
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
