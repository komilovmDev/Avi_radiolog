"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const countries = [
  "O'zbekiston",
  "Qozog'iston",
  "Qirg'iziston",
  "Tojikiston",
  "Turkmaniston",
  "Rossiya",
  "Boshqa",
]

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    organization: "",
    country: "",
    email: "",
    phone: "",
    comment: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: API integratsiyasi
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Ariza muvaffaqiyatli yuborildi!
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Jamoamiz tez orada siz bilan bog&apos;lanadi.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8 sm:p-10 shadow-glass-lg"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
          >
            Ism
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all"
            placeholder="Ismingiz"
          />
        </div>

        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
          >
            Lavozim
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all"
            placeholder="Lavozimingiz"
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
          >
            Tashkilot
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all"
            placeholder="Tashkilot nomi"
          />
        </div>

        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
          >
            Davlat
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all"
          >
            <option value="">Tanlang</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all"
            placeholder="+998 90 123 45 67"
          />
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2"
          >
            Izoh
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all resize-none"
            placeholder="Qo'shimcha ma'lumotlar..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-slate-300 text-medical-blue focus:ring-medical-blue"
          />
          <label htmlFor="consent" className="text-sm text-slate-600 dark:text-slate-400">
            Ma&apos;lumotlaringizni qayta ishlashga roziman
          </label>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Yuborilmoqda..." : "Ariza yuborish"}
        </Button>
      </div>
    </motion.form>
  )
}
