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

const THEMES = [
  { name: "custom-theme-0", label: "Default", color: "hsl(205 82% 51%)" },
  { name: "custom-theme-1", label: "Violet", color: "hsl(251 79% 66%)" },
  { name: "custom-theme-2", label: "Coral", color: "hsl(16 100% 66%)" },
];

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const toggleDarkMode = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    // We update the class on html element to toggle dark mode
    // And store the preference in local storage.
    // The theme provider will pick this up on next load.
    if(newTheme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newTheme);
  };

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
            checked={resolvedTheme === 'dark'}
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
                    {theme === p.name && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
