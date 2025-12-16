import { Ok } from "@/icons";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const Step1 = () => {
  const value = useAppStore((store) => store.step1value);
  const setValue = useAppStore((store) => store.setStep1value);

  return (
    <>
      {["PayIN Only", "PayIN + PayOUT"].map((name) => {
        const isSelected = value === name;
        return (
          <Button
            startIcon={
              isSelected ? <Ok style={{ marginRight: "2px" }} /> : undefined
            }
            key={name}
            onClick={() => setValue(name)}
            color="secondary"
            variant={isSelected ? "outlined" : "contained"}
            sx={{
              textTransform: "none",
              borderRadius: 30,
              boxShadow: "none",
              bgcolor: isSelected ? undefined : "#F7D0FF",
              color: "#A808C8",
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 500,
              fontSize: 25,
              width: 302,
              py: 1,
              transition: "background-color 0.5s",
              "&:hover": {
                boxShadow: "none",
                bgcolor: isSelected ? undefined : "#f2b7feff",
              },
            }}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};
