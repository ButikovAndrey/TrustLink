import { create } from "zustand";
import { createStepSlice, StepSlice } from "./stepSlice";
import { createUserSlice, UserSlice } from "./userSlice";

type AppStore = StepSlice & UserSlice;

export const useAppStore = create<AppStore>()((...a) => ({
  ...createStepSlice(...a),
  ...createUserSlice(...a),
}));
