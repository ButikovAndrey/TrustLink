import { Flag, TrustLink, TrustLinkSymbol } from "@/icons";
import { SFlag, SHeadLogo, SNavContainer } from "./styles";
import { Box } from "@mui/material";
import { RefObject } from "react";
import { LeftBurger } from "@/pages/home/NavigationHeader/LeftBurger";

type PropsType = {
  liveSection: RefObject<null>;
  calculatorSection: RefObject<null>;
  contactsSection: RefObject<null>;
};

export const NavigationHeader = ({
  liveSection,
  calculatorSection,
  contactsSection,
}: PropsType) => {
  return (
    <Box component="nav" sx={SNavContainer}>
      <LeftBurger
        liveSection={liveSection}
        calculatorSection={calculatorSection}
        contactsSection={contactsSection}
      />
      <Box sx={SHeadLogo}>
        <TrustLinkSymbol />
        <TrustLink />
      </Box>
      <Flag style={SFlag} />
    </Box>
  );
};
