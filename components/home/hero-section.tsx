"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-12 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-white via-white/50 to-medical-blue/5 dark:from-slate-900 dark:via-slate-900/95 dark:to-medical-blue/10 -z-10" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-medical-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-medical-blue/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-medical-blue font-medium"
            >
              <Activity className="w-4 h-4" />
              AI-asosli radiologiya yordamchisi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight"
            >
              Radiologlar uchun yangi avlod{" "}
              <span className="text-medical-blue">sun&apos;iy intellekt</span>{" "}
              yordamchisi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              DICOM tasvirlarini tahlil qiladi, patologiyalarni aniqlashga yordam
              beradi va hisobot tayyorlash jarayonini tezlashtiradi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3}}
              className="flex flex-wrap gap-4"
            >
              <Link href="/demo">
                <Button size="lg" className="group">
                  Demo so&apos;rash
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/platforma">
                <Button variant="secondary" size="lg">
                  Bog&apos;lanish
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right - Radiology image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-2 shadow-glass-lg overflow-hidden">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/radiologist-workstation.png"
                  alt="Radiolog tibbiy skanlarni tahlil qilmoqda - AviRadiology AI yordamchisi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* AI badge overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 glass rounded-lg p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-slate-900 dark:text-slate-100">
                      AI tahlil yordamchisi
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    DICOM tahlil • Patologiya aniqlash • Hisobot yordami
                  </p>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 glass rounded-xl px-4 py-2 shadow-soft hidden lg:block"
            >
              <p className="text-xs text-slate-600 dark:text-slate-400">Aniqlik</p>
              <p className="text-lg font-bold text-medical-blue">98.2%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
