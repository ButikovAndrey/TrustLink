import { SJoinButton } from "./styles";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const JoinBlock = () => {
  const setOpen = useAppStore((store) => store.setOpenTR);
  return (
    <Button
      fullWidth
      color="secondary"
      variant="contained"
      onClick={setOpen}
      sx={SJoinButton}
    >
      Join now!
    </Button>
  );
};
