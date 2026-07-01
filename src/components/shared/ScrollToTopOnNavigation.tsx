"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTopOnNavigation() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const shell = document.querySelector(".siteShell") as HTMLElement | null

    if (shell) {
      shell.scrollTo({ top: 0, left: 0, behavior: "auto" })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname, searchParams])

  return null
}
