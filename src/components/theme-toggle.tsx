"use client"

import * as React from "react"
import { Moon, Sun, Palette, Check, SwatchBook, Pipette, BookHeart } from "lucide-react"
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

const customPalettes = [
  { name: "Default", key: "custom-theme-0", color: "hsl(221 83% 53%)" },
  { name: "Slate & Amber", key: "custom-theme-1", color: "hsl(220 25% 27%)" },
  { name: "Modern Cyan", key: "custom-theme-2", color: "hsl(188 96% 43%)" },
  { name: "Monochromatic Blue", key: "custom-theme-3", color: "hsl(221 83% 53%)" },
  { name: "Deep Cyan & Emerald", key: "custom-theme-4", color: "hsl(191 91% 37%)" },
  { name: "Deep Indigo & Yellow", key: "custom-theme-5", color: "hsl(243 55% 42%)" },
];

const bespokePalettes = [
  { name: "Vibrant Red", key: "custom-theme-6", color: "hsl(0 100% 71%)" },
  { name: "Cool Slate", key: "custom-theme-7", color: "hsl(251 81% 67%)" },
  { name: "Sky Blue", key: "custom-theme-8", color: "hsl(197 71% 73%)" },
  { name: "Cyberpunk", key: "custom-theme-9", color: "hsl(330 100% 50%)" },
  { name: "Strong Blue", key: "custom-theme-10", color: "hsl(211 78% 46%)" },
  { name: "Violet Kiss", key: "custom-theme-11", color: "hsl(271 76% 53%)" },
  { name: "Vibrant Green & Blue", key: "custom-theme-12", color: "hsl(134 61% 40%)" },
];

const daisyPalettes = [
    { name: "Forest", key: "daisy-forest", color: "hsl(135 41% 52%)" },
    { name: "Cyberpunk", key: "daisy-cyberpunk", color: "hsl(49 97% 60%)" },
    { name: "Cupcake", key: "daisy-cupcake", color: "hsl(193 96% 76%)" },
    { name: "Bumblebee", key: "daisy-bumblebee", color: "hsl(43 96% 56%)" },
    { name: "Emerald", key: "daisy-emerald", color: "hsl(158 95% 44%)" },
    { name: "Corporate", key: "daisy-corporate", color: "hsl(215 25% 27%)" },
    { name: "Synthwave", key: "daisy-synthwave", color: "hsl(279 83% 60%)" },
    { name: "Retro", key: "daisy-retro", color: "hsl(201 83% 65%)" },
    { name: "Valentine", key: "daisy-valentine", color: "hsl(338 91% 67%)" },
    { name: "Halloween", key: "daisy-halloween", color: "hsl(33 100% 50%)" },
    { name: "Garden", key: "daisy-garden", color: "hsl(150 41% 47%)" },
    { name: "Aqua", key: "daisy-aqua", color: "hsl(207 90% 54%)" },
    { name: "Lofi", key: "daisy-lofi", color: "hsl(215 28% 17%)" },
    { name: "Pastel", key: "daisy-pastel", color: "hsl(284 81% 67%)" },
    { name: "Fantasy", key: "daisy-fantasy", color: "hsl(215 25% 27%)" },
    { name: "Wireframe", key: "daisy-wireframe", color: "hsl(215 25% 27%)" },
    { name: "Black", key: "daisy-black", color: "hsl(0 0% 100%)" },
    { name: "Luxury", key: "daisy-luxury", color: "hsl(0 0% 100%)" },
    { name: "Dracula", key: "daisy-dracula", color: "hsl(280 82% 70%)" },
    { name: "CMYK", key: "daisy-cmyk", color: "hsl(180 97% 55%)" },
    { name: "Autumn", key: "daisy-autumn", color: "hsl(252 87% 66%)" },
    { name: "Business", key: "daisy-business", color: "hsl(215 25% 27%)" },
    { name: "Acid", key: "daisy-acid", color: "hsl(97 97% 76%)" },
    { name: "Lemonade", key: "daisy-lemonade", color: "hsl(158 95% 44%)" },
    { name: "Night", key: "daisy-night", color: "hsl(207 90% 54%)" },
    { name: "Coffee", key: "daisy-coffee", color: "hsl(43 34% 65%)" },
    { name: "Winter", key: "daisy-winter", color: "hsl(207 90% 54%)" },
];

const primaryColorPalettes = [
  { name: "Red", key: "primary-red", color: "hsl(0 84% 60%)" },
  { name: "Orange", key: "primary-orange", color: "hsl(24 95% 53%)" },
  { name: "Amber", key: "primary-amber", color: "hsl(45 95% 51%)" },
  { name: "Yellow", key: "primary-yellow", color: "hsl(53 98% 50%)" },
  { name: "Lime", key: "primary-lime", color: "hsl(90 84% 48%)" },
  { name: "Green", key: "primary-green", color: "hsl(142 71% 45%)" },
  { name: "Emerald", key: "primary-emerald", color: "hsl(162 81% 41%)" },
  { name: "Teal", key: "primary-teal", color: "hsl(171 91% 39%)" },
  { name: "Cyan", key: "primary-cyan", color: "hsl(188 96% 43%)" },
  { name: "Sky", key: "primary-sky", color: "hsl(199 98% 53%)" },
  { name: "Blue", key: "primary-blue", color: "hsl(221 83% 53%)" },
  { name: "Indigo", key: "primary-indigo", color: "hsl(244 76% 51%)" },
  { name: "Violet", key: "primary-violet", color: "hsl(262 84% 59%)" },
  { name: "Purple", key: "primary-purple", color: "hsl(289 83% 59%)" },
  { name: "Fuchsia", key: "primary-fuchsia", color: "hsl(326 89% 55%)" },
  { name: "Pink", key: "primary-pink", color: "hsl(341 95% 58%)" },
  { name: "Rose", key: "primary-rose", color: "hsl(347 89% 61%)" },
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
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={toggleDarkMode}>
          <div className="flex items-center w-full cursor-pointer">
            {isDarkMode ? <Sun className="mr-2 h-4 w-4"/> : <Moon className="mr-2 h-4 w-4"/>}
            <span>{isDarkMode ? 'Light' : 'Dark'} Mode</span>
            <div className="flex-grow"></div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="ml-auto"
            />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <SwatchBook className="mr-2 h-4 w-4" />
            <span>Bespoke</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
               <div className="max-h-60 overflow-y-auto">
                {bespokePalettes.map((p) => (
                  <DropdownMenuItem key={p.key} onClick={() => setPalette(p.key)}>
                    <div className="flex items-center gap-2">
                       <div
                        className="w-4 h-4 rounded-full border"
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
         <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Pipette className="mr-2 h-4 w-4" />
            <span>Custom</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
               <div className="max-h-60 overflow-y-auto">
                {customPalettes.map((p) => (
                  <DropdownMenuItem key={p.key} onClick={() => setPalette(p.key)}>
                    <div className="flex items-center gap-2">
                       <div
                        className="w-4 h-4 rounded-full border"
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
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <BookHeart className="mr-2 h-4 w-4" />
            <span>DaisyUI</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <div className="max-h-60 overflow-y-auto">
                {daisyPalettes.map((p) => (
                  <DropdownMenuItem key={p.key} onClick={() => setPalette(p.key)}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full border"
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
         <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Primary Colors</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <div className="max-h-60 overflow-y-auto">
                {primaryColorPalettes.map((p) => (
                  <DropdownMenuItem key={p.key} onClick={() => setPalette(p.key)}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full border"
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
