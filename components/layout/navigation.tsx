"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/platforma", label: "Platforma" },
  { href: "/ai-imkoniyatlari", label: "AI imkoniyatlari" },
  { href: "/klinikalar", label: "Klinikalar uchun" },
  { href: "/integratsiyalar", label: "Integratsiyalar" },
  { href: "/xavfsizlik", label: "Xavfsizlik" },
  { href: "/kompaniya", label: "Kompaniya" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-medical-blue">
              Avi<span className="text-slate-900 dark:text-slate-100">Radiology</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-medical-blue dark:text-slate-400 dark:hover:text-medical-blue-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/demo">
              <Button size="sm" className="shadow-medical">
                Demo so&apos;rash
              </Button>
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Menyuni ochish"
            >
              {isMobileMenuOpen ? <X size={24} className="text-slate-900 dark:text-slate-100" /> : <Menu size={24} className="text-slate-900 dark:text-slate-100" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 py-4 px-4 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 rounded-xl text-slate-900 hover:bg-medical-blue/10 dark:text-slate-100 hover:text-medical-blue transition-colors dark:text-slate-200 dark:hover:bg-medical-blue/20"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block pt-4 px-4"
                >
                  <Button className="w-full">Demo so&apos;rash</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
