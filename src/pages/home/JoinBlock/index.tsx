import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const JoinBlock = () => {
  const setOpen = useAppStore((store) => store.setOpenTR);
  return (
    <>
      <Button
        fullWidth
        color="secondary"
        variant="outlined"
        sx={{
          textTransform: "none",
          mb: "20px",
          fontFamily: '"Manrope", sans-serif',
          fontSize: 25,
          fontWeight: 500,
          borderRadius: 30,
          py: 1,
        }}
      >
        Login
      </Button>

      <Button
        fullWidth
        color="secondary"
        variant="contained"
        onClick={setOpen}
        sx={{
          textTransform: "none",
          boxShadow: "none",
          fontFamily: '"Manrope", sans-serif',
          fontSize: 25,
          fontWeight: 500,
          borderRadius: 30,
          py: 1,
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        Join now!
      </Button>
    </>
  );
};
