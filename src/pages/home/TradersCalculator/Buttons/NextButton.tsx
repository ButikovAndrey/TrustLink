import { SSBNextButton } from "./styles";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";
import { useMemo } from "react";

export const NextButton = () => {
  const step = useAppStore((store) => store.step);
  const step0value = useAppStore((store) => store.step0value);
  const step1value = useAppStore((store) => store.step1value);
  const step2value = useAppStore((store) => store.step2value);
  const increase = useAppStore((store) => store.increase);

  const valueFilled = useMemo(() => {
    switch (step) {
      case 0:
        return Boolean(step0value);
      case 1:
        return Boolean(step1value.length);
      case 2:
        return Boolean(step2value.length);
      default:
        return true;
    }
  }, [step, step0value, step1value, step2value]);

  const onNextClick = () => {
    if (!valueFilled) return;
    increase();
  };

  if (step > 3) return null;

  return (
    <Button
      color="secondary"
      variant="contained"
      disabled={!valueFilled}
      sx={SSBNextButton}
      onClick={onNextClick}
    >
      Next
    </Button>
  );
};
