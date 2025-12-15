import { Step0 } from "./Step0";
import { useAppStore } from "@/store";
import { CircularProgress } from "@mui/material";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "@/pages/home/TradersCalculator/Steps/Step4";

export const StepSwither = () => {
  const step = useAppStore((store) => store.step);
  switch (step) {
    case 0:
      return <Step0 />;

    case 1:
      return <Step1 />;

    case 2:
      return <Step2 />;

    case 3:
      return <Step3 />;

    case 4:
      return <Step4 />;

    default:
      return <CircularProgress color="secondary" />;
  }
};
