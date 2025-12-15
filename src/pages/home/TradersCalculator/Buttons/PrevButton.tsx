import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const PrevButton = () => {
  const step = useAppStore((store) => store.step);
  const decrease = useAppStore((store) => store.decrease);

  if (!step) return null;

  return (
    <Button
      color="secondary"
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: 30,
        boxShadow: "none",
        bgcolor: "#F7D0FF",
        color: "#A808C8",
        fontFamily: '"Manrope", sans-serif',
        fontWeight: 500,
        fontSize: 25,
        px: 3.6,
        py: 1,
        transition: "background-color 0.5s",
        "&:hover": {
          boxShadow: "none",
          bgcolor: "#f2b7feff",
        },
      }}
      onClick={decrease}
    >
      Prev
    </Button>
  );
};
