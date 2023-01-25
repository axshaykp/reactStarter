import {create} from "zustand";

export const useToggleStore = create((set) => ({
    toggle: 0,
    set100: () => set((state) => ({ toggle: 100 })),
    set200: () => set((state) => ({ toggle: 200 })),
}));
