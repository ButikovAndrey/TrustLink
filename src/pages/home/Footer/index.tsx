import { TrustLink, TrustLinkSymbol } from "@/icons";
import {
  SFooterContainer,
  SFooterLeftBox,
  SFooterLink,
  SFooterRightBox,
  SFooterTitle,
  SResourcesBox,
  SSitemapSection,
} from "./styles";
import { Box, Container, Typography } from "@mui/material";
import { RefObject } from "react";
import { useAppStore } from "@/store";

type PropsType = {
  liveSection: RefObject<null>;
};

export const Footer = ({ liveSection }: PropsType) => {
  const setOpen = useAppStore((store) => store.setOpenTR);
  const scrollToSection = (
    ref: RefObject<HTMLDivElement>,
    block: ScrollLogicalPosition | undefined = "start"
  ) => {
    ref.current.scrollIntoView({ block, behavior: "smooth" });
  };
  return (
    <Container sx={SFooterContainer} component="footer">
      <Box sx={SFooterLeftBox}>
        <TrustLinkSymbol />
        <TrustLink />
      </Box>
      <Box sx={SFooterRightBox}>
        <Box sx={SSitemapSection}>
          <Typography sx={SFooterTitle}>Sitemap</Typography>
          <Typography
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            sx={SFooterLink}
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
            sx={SFooterLink}
          >
            Live Activities
          </Typography>
          <Typography onClick={setOpen} sx={SFooterLink}>
            Join now
          </Typography>
        </Box>
        <Box sx={SResourcesBox}>
          <Typography sx={SFooterTitle}>Resources</Typography>
          <Typography sx={SFooterLink}>Terms & Conditions</Typography>
          <Typography sx={SFooterLink}>Privacy Policy</Typography>
          <Typography sx={SFooterLink}>{"Support (Telegram)"}</Typography>
          <Typography sx={SFooterLink}>Contact Us</Typography>
        </Box>
      </Box>
    </Container>
  );
};
