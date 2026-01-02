import { Calculator } from "@/icons";
import { ButtonsContainer } from "./Buttons";
import { Steps } from "./Steps";
import { Box, Container, Typography } from "@mui/material";
import { RefObject } from "react";
import {
  SCalcBoxInner,
  SCalcChooseBox,
  SCalcContainer,
  SCalcSubtitle,
  SCalcTitle,
  SCalcTitleBox,
} from "./styles";

type PropsType = {
  calculatorSection: RefObject<null>;
};

export const TradersCalculator = ({ calculatorSection }: PropsType) => {
  return (
    <Container component="main" sx={SCalcContainer}>
      <Box sx={SCalcBoxInner}>
        <Box ref={calculatorSection} sx={SCalcTitleBox}>
          <Calculator />
          <Typography sx={SCalcTitle} component="h2">
            Traders Calculator
          </Typography>
        </Box>
        <Typography sx={SCalcSubtitle} component="h4">
          Try out wizard to estimated earnings
        </Typography>
        <Box sx={SCalcChooseBox}>
          <Steps />
          <ButtonsContainer />
        </Box>
      </Box>
    </Container>
  );
};
