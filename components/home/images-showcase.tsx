"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ImagesShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white/50 dark:bg-slate-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-medical-blue/5 via-transparent to-transparent -z-10" />

      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Zamonaviy radiologiya muhiti
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            AI yordamida professional tibbiy tasvirlash va diagnostika
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden shadow-glass-lg"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/cover.png"
                alt="Radiolog tibbiy skanlarni ko'rib chiqmoqda - AviRadiology"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 bg-white/50 dark:bg-slate-800/50">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Radiologlar AI yordamchisi bilan
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Skrlarni tez va aniq tahlil qilish
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl overflow-hidden shadow-glass-lg"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/ai-dashboard.png"
                alt="AI radiologiya dashboard - DICOM tahlil interfeysi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 bg-white/50 dark:bg-slate-800/50">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                AI tahlil interfeysi
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                CT, MRI va hisobotlar bitta ekranda
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
