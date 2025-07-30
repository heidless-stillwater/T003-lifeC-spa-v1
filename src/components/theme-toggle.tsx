"use client"

import * as React from "react"
import { Palette, Check, Monitor, Sun, Moon } from "lucide-react"
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

const THEMES = [
  { name: "custom-theme-0", label: "Default", color: "hsl(206 85% 55%)" },
  { name: "custom-theme-1", label: "Violet", color: "hsl(251 79% 66%)" },
  { name: "custom-theme-2", label: "Coral", color: "hsl(16 100% 66%)" },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, themes } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Palette className="h-5 w-5" />
      </Button>
    )
  }

  const isDarkMode = resolvedTheme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  };

  const currentPalette = THEMES.find(t => t.name === theme)?.name || 'system';

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
           <DropdownMenuLabel className="p-0 flex items-center gap-2">
            {isDarkMode ? <Moon/> : <Sun/>}
            <span>Light / Dark</span>
            </DropdownMenuLabel>
          <Switch
            id="dark-mode-toggle"
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
            aria-label="Toggle light and dark mode"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Bespoke</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
                {THEMES.map((p) => (
                  <DropdownMenuItem
                    key={p.name}
                    onClick={() => setTheme(p.name)}
                  >
                    <div className="flex items-center gap-2">
                       <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span>{p.label}</span>
                    </div>
                    {currentPalette === p.name && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
         <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
           {currentPalette === 'system' && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
