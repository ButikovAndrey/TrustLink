import { multiSelect } from "@/store/stepSLiceHelpers";
import { StateCreator } from "zustand";

export interface StepSlice {
  step: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;

  step0value: string;
  step1value: string[];
  step2value: string[];
  step3value: number[];
  setStep0value: (value: string) => void;
  setStep1value: (value: string) => void;
  setStep2value: (value: string) => void;
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
      step0value: "",
      step1value: [],
      step2value: [],
      step3value: [1, 10000],
    }),
  step0value: "",
  setStep0value: (value: string) => set({ step0value: value }),
  setStep1value: (value: string) =>
    set((s) => ({ step1value: multiSelect(value, s.step1value) })),
  setStep2value: (value: string) =>
    set((s) => ({ step2value: multiSelect(value, s.step2value) })),
  setStep3value: (value: number[]) => set({ step3value: value }),

  step1value: [],
  step2value: [],
  step3value: [1, 10000],
});
