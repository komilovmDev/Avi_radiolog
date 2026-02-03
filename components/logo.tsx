"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

type LogoVariant = "auto" | "dark" | "light"

type LogoProps = {
  /** auto = mavzuga qarab, dark = har doim dark logo, light = har doim light logo */
  variant?: LogoVariant
  className?: string
  href?: string
  /** xs = nav (qisqa), sm = nav, lg = footer */
  size?: "xs" | "sm" | "lg"
}

/** Kompakt o‘lcham — ortiqcha joy egallamasin */
const sizes = {
  xs: { height: 24, width: 98 },
  sm: { height: 32, width: 130 },
  lg: { height: 40, width: 160 },
}

export function Logo({ variant = "auto", className, href = "/", size = "sm" }: LogoProps) {
  const { theme } = useTheme()
  const isDark =
    variant === "dark" || (variant === "auto" && theme === "dark")
  const src = isDark ? "/images/logo-dark.png" : "/images/logo-light.png"
  const { height, width } = sizes[size]

  const img = (
    <Image
      src={src}
      alt="AviShifo — Digital Medical Ecosystem"
      width={width}
      height={height}
      sizes={size === "xs" ? "98px" : size === "sm" ? "130px" : "160px"}
      className={cn("object-contain object-left", className)}
      priority
    />
  )

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {img}
      </Link>
    )
  }

  return img
}
