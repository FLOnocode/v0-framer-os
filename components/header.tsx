"use client"

import Link from "next/link"
import { Settings, BarChart2, Home } from "lucide-react"
import { usePathname } from "next/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/context/language-context"

export function Header() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <header className="p-4 border-b border-border flex items-center justify-between">
      <h1 className="text-xl font-bold">{t("framer.requirements.tracker")}</h1>
      <div className="flex items-center gap-4">
        <Link href="/" className={pathname === "/" ? "text-blue-500" : "text-muted-foreground"}>
          <Home className="h-5 w-5" />
        </Link>
        <Link href="/stats" className={pathname === "/stats" ? "text-blue-500" : "text-muted-foreground"}>
          <BarChart2 className="h-5 w-5" />
        </Link>
        <Link href="/settings" className={pathname === "/settings" ? "text-blue-500" : "text-muted-foreground"}>
          <Settings className="h-5 w-5" />
        </Link>
        <LanguageToggle />
      </div>
    </header>
  )
}
