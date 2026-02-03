import type { Metadata } from "next"
import { DemoForm } from "@/components/demo/demo-form"

export const metadata: Metadata = {
  title: "Demo so'rash — AviRadiology",
  description:
    "AviRadiology platformasi demo versiyasini olish uchun ariza qoldiring. Radiologlar uchun AI yordamchisi bilan tanishing.",
}

export default function DemoPage() {
  return (
    <section className="min-h-screen pt-20 pb-20 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Demo so&apos;rash
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Platforma bilan tanishish uchun ariza qoldiring. Jamoamiz tez orada
              siz bilan bog&apos;lanadi.
            </p>
          </div>
          <DemoForm />
        </div>
      </div>
    </section>
  )
}
