import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Database,
  FileCheck,
  Workflow,
  Cloud,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Integratsiyalar — AviRadiology",
  description:
    "PACS, DICOM, RIS tizimlari bilan integratsiya. Mahalliy yoki bulutli o'rnatish.",
}

const integrations = [
  {
    icon: Database,
    title: "PACS bilan ishlaydi",
    description:
      "Mavjud PACS tizimlaringiz bilan to'g'ridan-to'g'ri ulanish. DICOM C-STORE, C-FIND va C-MOVE protokollari qo'llab-quvvatlanadi.",
  },
  {
    icon: FileCheck,
    title: "DICOM standartini qo'llab-quvvatlaydi",
    description:
      "To'liq DICOM 3.0 va DICOMweb moslashuvchanligi. CT, MRI, CR, DR va boshqa modalitetlar bilan ishlash.",
  },
  {
    icon: Workflow,
    title: "RIS tizimlariga ulanish",
    description:
      "Radiology Information System (RIS) bilan integratsiya — tekshiruv ro'yxatlari va workflow boshqaruvi.",
  },
  {
    icon: Cloud,
    title: "Mahalliy yoki bulutli o'rnatish",
    description:
      "Xavfsizlik talablaringizga qarab — mahalliy server yoki xavfsiz bulut infratuzilmasi. Hybrid variant ham mavjud.",
  },
]

export default function IntegratsiyalarPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Integratsiyalar
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            AviRadiology mavjud tibbiy infratuzilmangiz bilan mos ishlaydi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {integrations.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-8 hover:shadow-glass-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-medical-blue/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-medical-blue" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {item.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/demo">
            <Button size="lg" className="group">
              Texnik demo so&apos;rash
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
