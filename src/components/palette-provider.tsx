"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type PaletteContextType = {
  palette: string;
  setPalette: (palette: string) => void;
};

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export const PaletteProvider = ({ children }: { children: ReactNode }) => {
  const [palette, setPalette] = useState('custom-theme-0');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedPalette = localStorage.getItem('palette');
    if (storedPalette) {
      setPalette(storedPalette);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute('data-palette', palette);
      localStorage.setItem('palette', palette);
    }
  }, [palette, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = () => {
  const context = useContext(PaletteContext);
  if (context === undefined) {
    throw new Error('usePalette must be used within a PaletteProvider');
  }
  return context;
};
