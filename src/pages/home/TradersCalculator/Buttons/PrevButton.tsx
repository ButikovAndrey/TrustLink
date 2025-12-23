import { SSBPrevButton } from "./styles";
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
      sx={SSBPrevButton}
      onClick={decrease}
    >
      Prev
    </Button>
  );
};
