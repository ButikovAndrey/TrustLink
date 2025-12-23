import { SSSubtitle, SSTitle, SSTitleContainer } from "./styles";
import { useAppStore } from "@/store";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

export const Title = () => {
  const step = useAppStore((store) => store.step);
  const [title, subtitle] = useMemo(() => {
    switch (step) {
      case 0:
        return ["Select Currency", "Select One Option"];
      case 1:
        return ["Operation Type", "Select One Option"];
      case 2:
        return ["Select Payment Methods", "Multi-select"];
      case 3:
        return ["Preferred check size", "Select the range (0–10000)"];
      case 4:
        return ["Estimated Traders Earnings"];

      default:
        return ["Calculating..."];
    }
  }, [step]);
  return (
    <Box sx={SSTitleContainer(step === 4)}>
      <Typography sx={SSTitle}>{title}</Typography>
      {Boolean(subtitle) && <Typography sx={SSSubtitle}>{subtitle}</Typography>}
    </Box>
  );
};
