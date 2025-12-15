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
        return ["Operation Type", "Multi-select"];
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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        mt: step === 4 ? 3.5 : { xs: 4, sm: 10, md: 20 },
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 400,
          fontSize: 25,
          color: "#1B2128",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      {Boolean(subtitle) && (
        <Typography
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontWeight: 400,
            fontSize: 15,
            color: "#868686",
            textAlign: "center",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
