import { TCurrency } from "@/pages/home/TradersCalculator/Steps/types";
import { multiSelect } from "@/store/stepSliceHelpers";
import { StateCreator } from "zustand";

export interface StepSlice {
  step: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;

  step0value: TCurrency | null;
  step1value: string | null;
  step2value: string[];
  step3value: number[];
  setStep0value: (value: TCurrency) => void;
  setStep1value: (value: string) => void;
  setStep2value: (value: string | null) => void;
  setStep3value: (value: number[]) => void;
}

export const createStepSlice: StateCreator<StepSlice, [], [], StepSlice> = (
  set
) => ({
  step: 0,
  increase: () => set((state) => ({ step: state.step + 1 })),
  decrease: () => set((state) => ({ step: state.step - 1 })),
  reset: () =>
    set({
      step: 0,
      step0value: null,
      step1value: null,
      step2value: [],
      step3value: [1, 10000],
    }),
  setStep0value: (value: TCurrency) => set({ step0value: value }),
  setStep1value: (value: string) => set({ step1value: value }),
  setStep2value: (value: string | null) =>
    set((s) => ({ step2value: value ? multiSelect(value, s.step2value) : [] })),
  setStep3value: (value: number[]) => set({ step3value: value }),

  step0value: null,
  step1value: null,
  step2value: [],
  step3value: [1, 10000],
});
