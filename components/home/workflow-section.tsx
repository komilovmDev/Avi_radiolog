"use client"

import { motion } from "framer-motion"
import { Upload, Brain, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Upload,
    title: "Tekshiruv tizimga yuklanadi",
    description: "DICOM tasvirlar PACS yoki to'g'ridan-to'g'ri platformaga o'tadi",
  },
  {
    icon: Brain,
    title: "AI tahlil qiladi",
    description: "Sun'iy intellekt tasvirlarni tahlil qiladi va shubhali joylarni belgilaydi",
  },
  {
    icon: FileText,
    title: "Radiolog tayyor tavsiyalarni oladi",
    description: "Strukturali hisobot qoralamasi va differensial tashxis tavsiyalari",
  },
]

export function WorkflowSection() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-800/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-medical-blue/5 to-transparent -z-10" />

      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Qanday ishlaydi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Oddiy va aniq jarayon - 3 bosqichda AI yordamchisi ishga tushadi
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-medical-blue/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 h-full hover:shadow-glass-lg transition-all duration-300 group relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-medical-blue/10 mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-medical-blue" />
                  </div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-sm font-bold text-medical-blue/60">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-medical-blue/40 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/demo">
            <Button size="lg">
              CTA: Demo olish uchun ariza qoldiring
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
