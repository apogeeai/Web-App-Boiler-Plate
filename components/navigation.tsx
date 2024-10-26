"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/settings",
    label: "Settings",
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto min-w-[420px] max-w-[1260px] flex h-14 items-center justify-between px-4">
        <div className="hidden md:flex gap-6 md:gap-10">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4 mt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}