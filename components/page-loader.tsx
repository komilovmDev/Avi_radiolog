"use client"

import Image from "next/image"
import { useTheme } from "@/components/theme-provider"

export function PageLoader() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const src = isDark ? "/images/logo-dark.png" : "/images/logo-light.png"

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 dark:bg-slate-900"
      aria-live="polite"
      aria-label="Yuklanmoqda"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <Image
            src={src}
            alt="AviShifo"
            width={160}
            height={48}
            className="object-contain opacity-90"
            priority
          />
          <span
            className="absolute -bottom-1 left-1/2 h-0.5 w-24 -translate-x-1/2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
            aria-hidden
          >
            <span
              className="block h-full w-1/2 animate-shimmer rounded-full bg-medical-blue"
              style={{
                boxShadow: "0 0 20px 4px rgb(2 132 199 / 0.4)",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
