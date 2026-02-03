"use client"

import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle2, Brain, Shield } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Radiologlar ish yukining ortishi",
    description: "Kundalik tekshiruvlar soni doimiy oshmoqda",
  },
  {
    icon: AlertTriangle,
    title: "Patologiyalarni o'tkazib yuborish xavfi",
    description: "Charchoq va e'tiborsizlik diagnostika xatolariga olib keladi",
  },
  {
    icon: AlertTriangle,
    title: "Kadrlar yetishmovchiligi",
    description: "Malakali radiologlar yetishmayapti",
  },
]

const solutions = [
  {
    icon: CheckCircle2,
    title: "DICOM tekshiruvlarini AI yordamida tahlil qilish",
    color: "text-medical-blue",
  },
  {
    icon: CheckCircle2,
    title: "Shubhali hududlarni belgilash",
    color: "text-medical-blue",
  },
  {
    icon: CheckCircle2,
    title: "Strukturali hisobot yaratish",
    color: "text-medical-blue",
  },
  {
    icon: Brain,
    title: '"Ikkinchi fikr" texnologiyasi',
    color: "text-medical-blue",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function ProblemSolution() {
  return (
    <section className="py-16 lg:py-24 bg-white/50 dark:bg-slate-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-medical-blue/5 via-transparent to-transparent -z-10" />

      <div className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Muammo va yechim
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            AviRadiology radiologlarning qiyin vaziyatlarida yordamchi sifatida
            ishlaydi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-amber-100">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Muammo</h3>
            </div>
            {problems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={itemVariants}
                className="glass rounded-xl p-6 hover:shadow-glass transition-shadow"
              >
                <problem.icon className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {problem.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-medical-blue/10">
                <Shield className="w-6 h-6 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Yechim — AviRadiology
              </h3>
            </div>
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:shadow-glass transition-shadow"
              >
                <solution.icon
                  className={`w-8 h-8 flex-shrink-0 ${solution.color}`}
                />
                <p className="font-medium text-slate-900 dark:text-slate-100">{solution.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
