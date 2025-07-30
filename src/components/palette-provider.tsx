
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type PaletteContextType = {
  palette: string;
  setPalette: (palette: string) => void;
};

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

export const PaletteProvider = ({ children }: { children: ReactNode }) => {
  const [palette, setPaletteState] = useState('custom-theme-0');

  useEffect(() => {
    const storedPalette = localStorage.getItem('palette');
    if (storedPalette) {
      setPaletteState(storedPalette);
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('palette', palette);
  }, [palette]);

  const setPalette = (newPalette: string) => {
    setPaletteState(newPalette);
  };

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
