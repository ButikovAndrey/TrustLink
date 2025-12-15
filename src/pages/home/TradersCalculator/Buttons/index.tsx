import { NextButton } from "@/pages/home/TradersCalculator/Buttons/NextButton";
import { PrevButton } from "./PrevButton";
import { Box } from "@mui/material";
import { RetryJoinButtons } from "@/pages/home/TradersCalculator/Buttons/RetryJoinButtons";

export const ButtonsContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        mb: "40px",
        gap: "20px",
        flexWrap: "wrap",
        px: { xs: "20px", sm: "40px", md: "60px" },
        boxSizing: "border-box",
      }}
    >
      <PrevButton />
      <NextButton />
      <RetryJoinButtons />
    </Box>
  );
};
