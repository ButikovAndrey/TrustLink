import { Ok } from "@/icons";
import { SS1Button } from "./styles";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";
import { step1operationTypes } from "./constats";

export const Step1 = () => {
  const value = useAppStore((store) => store.step1value);
  const setValue = useAppStore((store) => store.setStep1value);

  return (
    <>
      {step1operationTypes.map((name) => {
        const isSelected = value === name;
        return (
          <Button
            startIcon={isSelected && <Ok style={{ marginRight: "2px" }} />}
            key={name}
            onClick={() => setValue(name)}
            color="secondary"
            variant={isSelected ? "outlined" : "contained"}
            sx={SS1Button(isSelected)}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};
