import { Container, Typography, Box } from "@mui/material";
import { Banner, TrustLink, TrustLinkSymbol } from "@/icons";
import { LiveTable } from "@/pages/home/LiveTable";
import { AnimatedHead } from "@/pages/home/AnimatedHead";
import { JoinBlock } from "@/pages/home/JoinBlock";
import { NavigationHeader } from "@/pages/home/NavigationHeader";
import { RefObject, useRef } from "react";
import { TradersCalculator } from "@/pages/home/TradersCalculator";

export const Home = () => {
  const liveSection = useRef(null);
  const calculatorSection = useRef(null);
  const joinSection = useRef(null);
  const contactsSection = useRef(null);

  const scrollToSection = (
    ref: RefObject<HTMLDivElement>,
    block: ScrollLogicalPosition | undefined = "start"
  ) => {
    ref.current.scrollIntoView({ block, behavior: "smooth" });
  };
  return (
    <>
      <Container sx={{ py: 3, px: 0 }} component="header">
        <NavigationHeader
          liveSection={liveSection}
          calculatorSection={calculatorSection}
          contactsSection={contactsSection}
        />
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
                width: "97%",
                maxWidth: 790,
                textAlign: "center",
                fontSize: {
                  xs: 30,
                  sm: 40,
                  md: 50,
                },
                lineHeight: "60px",
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
        component="datalist"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mb: "130px",
        }}
      >
        <Box ref={liveSection} sx={{ width: "100%", maxWidth: 790 }}>
          <LiveTable />
          <JoinBlock />
          <Box ref={joinSection} />
        </Box>
      </Container>
      <TradersCalculator calculatorSection={calculatorSection} />
      <Container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          mt: "100px",
          p: {
            xs: 0.5,
            sm: 1,
            md: 2,
          },
        }}
        component="footer"
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            width: "50%",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <TrustLinkSymbol />
          <TrustLink />
        </Box>
        <Box
          ref={contactsSection}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "flex-start",
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: 215,
            }}
          >
            <Typography
              sx={{
                color: "#440A8F",
                fontFamily: '"Montserat", sans-serif',
                mb: "20px",
                fontWeight: 700,
              }}
            >
              Sitemap
            </Typography>
            <Typography
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              sx={{
                color: "#737373",
                mb: "10px",
                cursor: "pointer",
                fontFamily: '"Montserat", sans-serif',
                fontWeight: 500,
                transition: "color 0.5s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Home
            </Typography>
            <Typography
              onClick={() =>
                scrollToSection(
                  liveSection as unknown as RefObject<HTMLDivElement>,
                  "center"
                )
              }
              sx={{
                color: "#737373",
                mb: "10px",
                cursor: "pointer",
                fontFamily: '"Montserat", sans-serif',
                fontWeight: 500,
                transition: "color 0.5s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Live Activities
            </Typography>
            <Typography
              onClick={() =>
                scrollToSection(
                  joinSection as unknown as RefObject<HTMLDivElement>,
                  "center"
                )
              }
              sx={{
                color: "#737373",
                mb: "10px",
                cursor: "pointer",
                fontFamily: '"Montserat", sans-serif',
                fontWeight: 500,
                transition: "color 0.5s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Join now
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                color: "#440A8F",
                fontFamily: '"Montserat", sans-serif',
                mb: "20px",
                fontWeight: 700,
              }}
            >
              Resources
            </Typography>
            <Typography
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              sx={{
                color: "#737373",
                mb: "10px",
                cursor: "pointer",
                fontFamily: '"Montserat", sans-serif',
                fontWeight: 500,
                transition: "color 0.5s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Terms & Conditions
            </Typography>
            <Typography
              sx={{
                color: "#737373",
                mb: "10px",
                cursor: "pointer",
                fontFamily: '"Montserat", sans-serif',
                fontWeight: 500,
                transition: "color 0.5s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                color: "#737373",
                mb: "10px",
                cursor: "pointer",
                fontFamily: '"Montserat", sans-serif',
                fontWeight: 500,
                transition: "color 0.5s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              {"Support (Telegram)"}
            </Typography>
            <Typography
              sx={{
                color: "#737373",
                mb: "10px",
                cursor: "pointer",
                fontFamily: '"Montserat", sans-serif',
                fontWeight: 500,
                transition: "color 0.5s",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
