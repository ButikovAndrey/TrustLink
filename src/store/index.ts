import { create } from "zustand";
import { createStepSlice, StepSlice } from "./stepSlice";
import { createUserSlice, UserSlice } from "./userSlice";
import {
  createTraderRegistrationSlice,
  TraderRegistrationSlice,
} from "./traderRegistrationSlice";

type AppStore = StepSlice & UserSlice & TraderRegistrationSlice;

export const useAppStore = create<AppStore>()((...a) => ({
  ...createStepSlice(...a),
  ...createUserSlice(...a),
  ...createTraderRegistrationSlice(...a),
}));
