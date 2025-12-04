import { Container, Typography, Box, Button } from "@mui/material";
import {
  Banner,
  Burger,
  Flag,
  Live,
  TrustLink,
  TrustLinkSymbol,
} from "@/icons";
import { LiveTable } from "@/pages/home/LiveTable";
import { AnimatedHead } from "@/pages/home/AnimatedHead";

export const Home = () => {
  return (
    <>
      <Container sx={{ my: 3 }} component="header">
        <Box
          component="nav"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Burger />
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <TrustLinkSymbol />
            <TrustLink />
          </Box>
          <Flag />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: 380,
            position: "relative",
            mt: 3,
            mb: "110px",
            bgcolor: "#FDF0FF",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <AnimatedHead />
            <Typography
              sx={{
                display: "inline-block",
                width: "100%",
                maxWidth: 790,
                textAlign: "center",
                fontSize: {
                  xs: 32,
                  sm: 40,
                  md: 50,
                },
                lineHeight: "60px",
                fontWeight: 400,
                fontFamily: '"Manrope", sans-serif',
                letterSpacing: "-2%",
              }}
              component="h1"
            >
              Real-time transaction platform for traders
            </Typography>
          </Box>
          <Banner
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Container>
      <Container
        component="main"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 790 }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Live />
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: '"Manrope", sans-serif',
                fontSize: {
                  xs: 28,
                  sm: 32,
                  md: 40,
                },
              }}
              component="h3"
            >
              Live Activity
            </Typography>
          </Box>
          <LiveTable />
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
              borderRadius: "99px",
            }}
          >
            Login
          </Button>

          <Button
            fullWidth
            color="secondary"
            variant="contained"
            sx={{
              textTransform: "none",
              boxShadow: "none",
              fontFamily: '"Manrope", sans-serif',
              fontSize: 25,
              fontWeight: 500,
              borderRadius: "99px",
            }}
          >
            Join now!
          </Button>
        </Box>
      </Container>
    </>
  );
};
