import { StateCreator } from "zustand";

export interface TraderRegistrationSlice {
  openTR: boolean;
  setOpenTR: () => void;
  setCloseTR: () => void;
}

export const createTraderRegistrationSlice: StateCreator<
  TraderRegistrationSlice,
  [],
  [],
  TraderRegistrationSlice
> = (set) => ({
  openTR: false,
  setOpenTR: () => set({ openTR: true }),
  setCloseTR: () => set({ openTR: false }),
});
