import { StateCreator } from "zustand";

export interface TraderRegistrationSlice {
  openTR: boolean;
  readyKYC: boolean;
  setOpenTR: () => void;
  setCloseTR: () => void;
  setReadyKYC: (value: boolean) => void;
}

export const createTraderRegistrationSlice: StateCreator<
  TraderRegistrationSlice,
  [],
  [],
  TraderRegistrationSlice
> = (set) => ({
  openTR: false,
  readyKYC: true,

  setOpenTR: () => set({ openTR: true }),
  setCloseTR: () => set({ openTR: false }),
  setReadyKYC: (value: boolean) => set({ readyKYC: value }),
});
