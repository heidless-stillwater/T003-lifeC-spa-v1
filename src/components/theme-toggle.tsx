"use client"

import * as React from "react"
import { Palette, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "./ui/scroll-area"

const THEMES = [
  { name: "custom-theme-0", label: "Default", color: "hsl(205 95% 72%)" },
  { name: "custom-theme-1", label: "Warm Sunset", color: "hsl(35 95% 72%)" },
  { name: "custom-theme-2", label: "Cool Lavender", color: "hsl(285 95% 72%)" },
  { name: "custom-theme-3", label: "Minty Fresh", color: "hsl(155 95% 72%)" },
  { name: "custom-theme-4", label: "Rose Quartz", color: "hsl(355 95% 72%)" },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const currentPalette = THEMES.find(t => t.name === theme) ?? THEMES[0];

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Palette className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <div className="p-2 flex items-center justify-between">
           <DropdownMenuLabel className="p-0">Light / Dark</DropdownMenuLabel>
          <Switch
            id="dark-mode-toggle"
            checked={resolvedTheme === "dark"}
            onCheckedChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle light and dark mode"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Test 0</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <ScrollArea className={THEMES.length > 10 ? "h-96" : ""}>
                {THEMES.map((p) => (
                  <DropdownMenuItem
                    key={p.name}
                    onClick={() => document.documentElement.setAttribute('data-theme', p.name)}
                  >
                    <div className="flex items-center gap-2">
                       <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span>{p.label}</span>
                    </div>
                    {currentPalette.name === p.name && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </ScrollArea>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
