import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
import { Box } from "@mui/material";
import { RetryJoinButtons } from "./RetryJoinButtons";
import { SSBBox } from "./styles";

export const ButtonsContainer = () => {
  return (
    <Box sx={SSBBox}>
      <PrevButton />
      <NextButton />
      <RetryJoinButtons />
    </Box>
  );
};
