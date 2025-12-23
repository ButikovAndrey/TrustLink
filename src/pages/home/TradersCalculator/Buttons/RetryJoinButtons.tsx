import { SSBJoinButton, SSBRetryButton } from "./styles";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const RetryJoinButtons = () => {
  const step = useAppStore((store) => store.step);
  const reset = useAppStore((store) => store.reset);
  const setOpen = useAppStore((store) => store.setOpenTR);
  if (step !== 4) return null;
  return (
    <>
      <Button color="secondary" sx={SSBRetryButton} onClick={reset}>
        Retry
      </Button>
      <Button
        color="secondary"
        variant="contained"
        sx={SSBJoinButton}
        onClick={setOpen}
      >
        Join now!
      </Button>
    </>
  );
};
