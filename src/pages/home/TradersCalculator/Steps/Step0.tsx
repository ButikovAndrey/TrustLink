import { Ok } from "@/icons";
import { SS0Button } from "./styles";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";
import { step0currencies } from "./constats";

export const Step0 = () => {
  const value = useAppStore((store) => store.step0value);
  const setValue = useAppStore((store) => store.setStep0value);
  return (
    <>
      {step0currencies.map((name) => {
        const isSelected = name === value;
        return (
          <Button
            key={name}
            startIcon={isSelected && <Ok style={{ marginRight: "2px" }} />}
            color="secondary"
            variant={isSelected ? "outlined" : "contained"}
            onClick={() => setValue(name)}
            sx={SS0Button(isSelected)}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};
