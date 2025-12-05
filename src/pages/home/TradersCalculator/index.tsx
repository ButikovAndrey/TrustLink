import { Calculator } from "@/icons";
import { Box, Button, Container, Typography } from "@mui/material";
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
            height: 500,
            mt: "50px",
          }}
        >
          <Box sx={{ width: "100%", mt: "120px" }}>Блок 1</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mb: "40px",
              gap: "20px",
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: 30,
                boxShadow: "none",
                bgcolor: "#F7D0FF",
                color: "#A808C8",
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 500,
                fontSize: 25,
                px: 3.6,
                py: 1,
                transition: "background-color 0.5s",
                "&:hover": {
                  boxShadow: "none",
                  bgcolor: "#f2b7feff",
                },
              }}
            >
              Prev
            </Button>
            <Button
              color="secondary"
              variant="contained"
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
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
