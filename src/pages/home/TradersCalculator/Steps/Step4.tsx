import { PayIn, PayOut } from "@/icons";
import {
  SS4Container,
  SS4ContentDescription,
  SS4ContentTitle,
  SS4InfoBox,
  SS4InfoContentBox,
  SS4InfoInnerBox,
  SS4InfoTitle,
} from "./styles";
import { Box, Typography } from "@mui/material";

export const Step4 = () => {
  return (
    <Box sx={SS4Container}>
      <Box sx={SS4InfoBox}>
        <Box sx={SS4InfoInnerBox}>
          <PayIn />
          <Typography sx={SS4InfoTitle}>{"PayIN: 10,150 ₽"}</Typography>
        </Box>
        <Box sx={SS4InfoContentBox}>
          <Typography sx={SS4ContentTitle}>{"SPB Counterparties:"}</Typography>
          <Typography sx={SS4ContentDescription}>
            {"70,000 (7.5%) → 5,250 ₽"}
          </Typography>
          <Typography sx={SS4ContentTitle}>{"BT:"}</Typography>
          <Typography sx={SS4ContentDescription}>
            {"70,000 (7%) → 4,900 ₽"}
          </Typography>
        </Box>
      </Box>
      <Box sx={SS4InfoBox}>
        <Box sx={SS4InfoInnerBox}>
          <PayOut />
          <Typography sx={SS4InfoTitle}>{"PayOUT: 2,800 ₽"}</Typography>
        </Box>
        <Box sx={SS4InfoContentBox}>
          <Typography sx={SS4ContentTitle}>{"Total turnover:"}</Typography>
          <Typography sx={SS4ContentDescription}>
            {"140,000 (2%) → 2,800 ₽"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
