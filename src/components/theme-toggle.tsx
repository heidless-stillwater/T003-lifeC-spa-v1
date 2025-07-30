"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Palette, Check, Sun, Moon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "./ui/scroll-area"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

const bespokePalettes = [
  { name: "Default", theme: "custom-theme-0", color: "#73C2FB" },
];

const customPalettes = [
  { name: "Forest", theme: "forest", color: "#17A34A" },
  { name: "Cyberpunk", theme: "cyberpunk", color: "#FF7598" },
  { name: "Cupcake", theme: "cupcake", color: "#65C3C8" },
  { name: "Bumblebee", theme: "bumblebee", color: "#E0A82E" },
  { name: "Emerald", theme: "emerald", color: "#66CC8A" },
  { name: "Corporate", theme: "corporate", color: "#4B6BFB" },
  { name: "Synthwave", theme: "synthwave", color: "#E779C1" },
  { name: "Retro", theme: "retro", color: "#EF9995" },
  { name: "Valentine", theme: "valentine", color: "#E96D7B" },
  { name: "Halloween", theme: "halloween", color: "#F28C18" },
  { name: "Garden", theme: "garden", color: "#5C7F67" },
  { name: "Aqua", theme: "aqua", color: "#345DA7" },
  { name: "Lofi", theme: "lofi", color: "#0D0D0D" },
  { name: "Pastel", theme: "pastel", color: "#D1C1D7" },
  { name: "Fantasy", theme: "fantasy", color: "#6E0B75" },
  { name: "Wireframe", theme: "wireframe", color: "#B8B8B8" },
  { name: "Black", theme: "black", color: "#000000" },
  { name: "Luxury", theme: "luxury", color: "#FFFFFF" },
  { name: "Dracula", theme: "dracula", color: "#FF79C6" },
  { name: "CMYK", theme: "cmyk", color: "#45AEEE" },
  { name: "Autumn", theme: "autumn", color: "#8C0327" },
  { name: "Business", theme: "business", color: "#1A253F" },
  { name: "Acid", theme: "acid", color: "#FF00F4" },
  { name: "Lemonade", theme: "lemonade", color: "#519903" },
  { name: "Night", theme: "night", color: "#3B82F6" },
  { name: "Coffee", theme: "coffee", color: "#DB924B" },
  { name: "Winter", theme: "winter", color: "#057AFF" },
]

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(resolvedTheme === "dark" ? "dark" : "light");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme === "dark" ? customPalettes.find(p => p.theme === theme)?.theme || bespokePalettes.find(p => p.theme === theme)?.theme || 'custom-theme-0' : theme);
     // Manually set the theme for next-themes to keep track
    const currentPalette = theme?.replace('-dark', '') || 'custom-theme-0';
    if (newTheme === 'dark') {
       setTheme(`${currentPalette}-dark`);
    } else {
       setTheme(currentPalette);
    }
    // A bit of a hack, we need to force next-themes to re-evaluate
    const current = document.documentElement.getAttribute('data-theme') ?? 'custom-theme-0';
    if(newTheme === 'dark'){
      document.documentElement.classList.add('dark');
      setTheme(current);
    } else {
      document.documentElement.classList.remove('dark');
      setTheme(current);
    }
  }

  const handleSetTheme = (newTheme: string) => {
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    setTheme(newTheme);
  }

  if (!mounted) {
    return (
       <Button variant="ghost" size="icon" disabled>
        <Palette className="h-5 w-5" />
      </Button>
    )
  }

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <div className="flex items-center justify-between px-2 py-1.5">
          <Label htmlFor="dark-mode-toggle" className="flex items-center gap-2 text-sm font-normal">
            { isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" /> }
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </Label>
          <Switch
            id="dark-mode-toggle"
            checked={isDarkMode}
            onCheckedChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
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
              <ScrollArea className={bespokePalettes.length > 5 ? "h-48" : ""}>
                {bespokePalettes.map((palette) => (
                  <DropdownMenuItem key={palette.name} onClick={() => handleSetTheme(palette.theme)}>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: palette.color }} />
                      <span>{palette.name}</span>
                    </div>
                    {theme === palette.theme && <Check className="ml-auto h-4 w-4" />}
                  </DropdownMenuItem>
                ))}
              </ScrollArea>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Custom</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
               <ScrollArea className={customPalettes.length > 5 ? "h-48" : ""}>
                {customPalettes.map((palette) => (
                  <DropdownMenuItem key={palette.name} onClick={() => handleSetTheme(palette.theme)}>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: palette.color }} />
                      <span>{palette.name}</span>
                    </div>
                    {theme === palette.theme && <Check className="ml-auto h-4 w-4" />}
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
