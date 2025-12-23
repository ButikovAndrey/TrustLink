import { Container, Box } from "@mui/material";
import { LiveTable } from "./LiveTable";
import { AnimatedHead } from "./AnimatedHead";
import { JoinBlock } from "./JoinBlock";
import { NavigationHeader } from "./NavigationHeader";
import { useRef } from "react";
import { TradersCalculator } from "./TradersCalculator";
import { SHeaderContainer, SLiveContainer, SLiveInnerBox } from "./styles";
import { Footer } from "./Footer";
import { TraderRegistration } from "./TraderRegistration";

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
        <AnimatedHead />
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
      <TraderRegistration />
    </>
  );
};
