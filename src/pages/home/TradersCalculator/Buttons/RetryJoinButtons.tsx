import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const RetryJoinButtons = () => {
  const step = useAppStore((store) => store.step);
  const reset = useAppStore((store) => store.reset);
  if (step !== 4) return null;
  return (
    <>
      <Button
        color="secondary"
        sx={{
          textTransform: "none",
          borderRadius: 30,
          boxShadow: "none",
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 500,
          fontSize: 25,
          px: 3.6,
          py: 1,
          "&:hover": {
            boxShadow: "none",
          },
        }}
        onClick={reset}
      >
        Retry
      </Button>
      <Button
        color="secondary"
        variant="contained"
        sx={{
          textTransform: "none",
          textWrap: "nowrap",
          minWidth: 180,
          borderRadius: 30,
          boxShadow: "none",
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 500,
          fontSize: 25,
          px: 3.6,
          py: 1,
          flex: 1,
          "&:hover": {
            boxShadow: "none",
          },
        }}
        //   onClick={increase}
      >
        Join now!
      </Button>
    </>
  );
};
