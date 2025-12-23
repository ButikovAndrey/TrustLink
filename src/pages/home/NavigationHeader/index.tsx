import { TrustLink, TrustLinkSymbol } from "@/icons";
import { SHeadLogo, SNavContainer } from "./styles";
import { Box } from "@mui/material";
import { RefObject } from "react";
import { LeftBurger } from "./LeftBurger";
import { RigthtFlag } from "@/pages/home/NavigationHeader/RigthtFlag";

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
      <RigthtFlag />
    </Box>
  );
};
