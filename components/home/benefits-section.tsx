"use client"

import { motion } from "framer-motion"
import {
  Clock,
  Target,
  Plug2,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Clock,
    title: "Hisobot yozish vaqtini qisqartiradi",
    description: "AI yordamida tayyor qoralama hisobotlar - tezroq va barqaror sifat",
  },
  {
    icon: Target,
    title: "Diagnostika aniqligini oshiradi",
    description: "Shubhali hududlarni aniqlash va \"ikkinchi fikr\" - xavflarni kamaytiradi",
  },
  {
    icon: Plug2,
    title: "Mavjud tizimlarga mos ishlaydi",
    description: "PACS, RIS va DICOM standartlari bilan to'liq integratsiya",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Afzalliklar
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            AviRadiology platformasi radiologlar va klinikalar uchun aniq
            iqtisodiy va klinik samara beradi
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16 max-w-6xl mx-auto"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 hover:shadow-glass-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-medical-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/demo">
            <Button size="lg" variant="glass" className="group">
              Demo olish uchun ariza qoldiring
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
