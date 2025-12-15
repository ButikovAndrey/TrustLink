import { Container, Typography, Box } from "@mui/material";
import { Banner } from "@/icons";
import { LiveTable } from "@/pages/home/LiveTable";
import { AnimatedHead } from "@/pages/home/AnimatedHead";
import { JoinBlock } from "@/pages/home/JoinBlock";
import { NavigationHeader } from "@/pages/home/NavigationHeader";
import { useRef } from "react";
import { TradersCalculator } from "@/pages/home/TradersCalculator";
import {
  SBanner,
  SHeadAnimationContainer,
  SHeaderContainer,
  SHeaderInnerContainer,
  SHeadTitle,
  SLiveContainer,
  SLiveInnerBox,
} from "@/pages/home/styles";
import { Footer } from "@/pages/home/Footer";

export const Home = () => {
  const liveSection = useRef(null);
  const calculatorSection = useRef(null);
  const joinSection = useRef(null);
  const contactsSection = useRef(null);

  return (
    <>
      <Container sx={SHeaderContainer} component="header">
        <NavigationHeader
          liveSection={liveSection}
          calculatorSection={calculatorSection}
          contactsSection={contactsSection}
        />
        <Box sx={SHeaderInnerContainer}>
          <Box sx={SHeadAnimationContainer}>
            <AnimatedHead />
            <Typography sx={SHeadTitle} component="h1">
              Real-time transaction platform for traders
            </Typography>
          </Box>
          <Banner style={SBanner} />
        </Box>
      </Container>
      <Container component="datalist" sx={SLiveContainer}>
        <Box ref={liveSection} sx={SLiveInnerBox}>
          <LiveTable />
          <JoinBlock />
          <Box ref={joinSection} />
        </Box>
      </Container>
      <TradersCalculator calculatorSection={calculatorSection} />
      <Footer liveSection={liveSection} joinSection={joinSection} />
      <Box ref={contactsSection} />
    </>
  );
};
