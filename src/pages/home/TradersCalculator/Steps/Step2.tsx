import { Ok } from "@/icons";
import { SS2Button } from "./styles";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";
import { step2sources } from "./constats";

export const Step2 = () => {
  const value = useAppStore((store) => store.step2value);
  const setValue = useAppStore((store) => store.setStep2value);
  return (
    <>
      {step2sources.map(({ name, color, bgcolor, Icon }) => {
        const isSelected = value.includes(name);
        return (
          <Button
            key={name}
            color="secondary"
            variant={isSelected ? "outlined" : "contained"}
            onClick={() => setValue(name)}
            startIcon={
              isSelected ? (
                <Ok style={{ marginRight: "2px" }} />
              ) : (
                <Icon style={{ width: "25px", height: "25px" }} />
              )
            }
            sx={SS2Button({ isSelected, color, bgcolor })}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};
