import { Ok } from "@/icons";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const Step0 = () => {
  const value = useAppStore((store) => store.step0value);
  const setValue = useAppStore((store) => store.setStep0value);
  return (
    <>
      {["RUB", "KGZ", "AZN"].map((name) => (
        <Button
          key={name}
          startIcon={
            name === value ? <Ok style={{ marginRight: "2px" }} /> : undefined
          }
          color="secondary"
          variant={name === value ? "outlined" : "contained"}
          onClick={() => setValue(name)}
          sx={{
            textTransform: "none",
            borderRadius: 30,
            boxShadow: "none",
            bgcolor: name === value ? undefined : "#F7D0FF",
            color: "#A808C8",
            fontFamily: '"Manrope", sans-serif',
            fontWeight: 500,
            fontSize: 25,
            width: 225,
            py: 1,
            transition: "background-color 0.5s",
            "&:hover": {
              boxShadow: "none",
              bgcolor: name === value ? undefined : "#f2b7feff",
            },
          }}
        >
          {name}
        </Button>
      ))}
    </>
  );
};
