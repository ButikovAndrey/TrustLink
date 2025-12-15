import { Calculator } from "@/icons";
import { ButtonsContainer } from "./Buttons";
import { Steps } from "./Steps";
import { Box, Container, Typography } from "@mui/material";
import { RefObject } from "react";

type PropsType = {
  calculatorSection: RefObject<null>;
};

export const TradersCalculator = ({ calculatorSection }: PropsType) => {
  return (
    <Container
      component="main"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 900,
        }}
      >
        <Box
          ref={calculatorSection}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              xs: 1,
              sm: "10px",
            },
          }}
        >
          <Calculator />
          <Typography
            sx={{
              m: 0,
              p: 0,
              fontFamily: '"Manrope", sans-serif',
              fontSize: {
                xs: 32,
                sm: 36,
                md: 40,
              },
              textAlign: "center",
              color: "#1B2128",
            }}
            component="h2"
          >
            Traders Calculator
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontSize: {
              xs: 20,
              sm: 22,
              md: 25,
            },
            textAlign: "center",
            color: "#1B2128",
          }}
          component="h4"
        >
          Try out wizard to estimated earnings
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            boxSizing: "border-box",
            border: "5px solid #F6F8FA",
            borderRadius: "40px",
            minHeight: 500,
            mt: "50px",
          }}
        >
          <Steps />
          <ButtonsContainer />
        </Box>
      </Box>
    </Container>
  );
};
