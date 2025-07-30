"use client"

import * as React from "react"
import { Moon, Sun, Palette, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { usePalette } from "./palette-provider"

const palettes = [
  { name: "Default", key: "custom-theme-0", color: "hsl(207 90% 54%)" },
  { name: "Violet", key: "custom-theme-1", color: "hsl(252 80% 70%)" },
  { name: "Coral", key: "custom-theme-2", color: "hsl(16 100% 66%)" },
  { name: "Vibrant Red", key: "custom-theme-3", color: "hsl(0 100% 71%)" },
  { name: "Cool Slate", key: "custom-theme-4", color: "hsl(249 81% 67%)" },
];

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { palette, setPalette } = usePalette();

  const isDarkMode = resolvedTheme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-between px-2 py-1.5">
          <span className="text-sm font-medium">Dark Mode</span>
          <Switch
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
            aria-label="Toggle dark mode"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Bespoke</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
               <div className="max-h-60 overflow-y-auto">
                {palettes.map((p) => (
                  <DropdownMenuItem key={p.key} onClick={() => setPalette(p.key)}>
                    <div className="flex items-center gap-2">
                       <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: p.color }}
                      />
                      <span>{p.name}</span>
                    </div>
                    {palette === p.key && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
