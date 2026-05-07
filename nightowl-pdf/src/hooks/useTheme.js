import { create } from 'zustand';

// Simple theme store using Zustand
export const useTheme = create((set) => ({
  theme: 'slate', // 'midnight', 'slate', 'warm'
  setTheme: (newTheme) => set({ theme: newTheme }),
  
  // Future implementation: sync with document.documentElement
  applyTheme: (themeName) => {
    // Logic to set CSS variables based on tailwind config
    console.log(`Applied theme: ${themeName}`);
  }
}));
