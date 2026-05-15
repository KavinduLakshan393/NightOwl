import { create } from 'zustand';

const usePDFStore = create((set) => ({
  currentFileUrl: null,
  currentFileName: null,
  setCurrentFile: (url, name) => set({ currentFileUrl: url, currentFileName: name }),
  clearCurrentFile: () => {
    set((state) => {
      if (state.currentFileUrl) {
        URL.revokeObjectURL(state.currentFileUrl);
      }
      return { currentFileUrl: null, currentFileName: null };
    });
  },
}));

export default usePDFStore;
