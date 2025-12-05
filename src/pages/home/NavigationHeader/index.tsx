import {
  Burger,
  Calculator,
  Flag,
  Live,
  TrustLink,
  TrustLinkSymbol,
} from "@/icons";
import { Box, Divider, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, RefObject, useState } from "react";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<SVGSVGElement>) => {
    //@ts-expect-error no anchor found
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setAnchorEl(null);
  };

  return (
    <Box
      component="nav"
      sx={{
        // to icons { marginLeft: "35px" }
        // position: "fixed",
        // height: {
        //   xs: 60,
        //   sm: 65,
        //   md: 80,
        // },
        // top: {
        //   xs: 30,
        //   sm: 32,
        //   md: 40,
        // },
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "white",
        // borderBottom: "1px solid #FBE8FF",
        mb: 5,
        zIndex: 5,
      }}
    >
      <Burger
        id="menu-button"
        style={{ cursor: "pointer" }}
        aria-controls={open ? "navigation-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="navigation-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "#FBE8FF",
              color: "#A808C8",
              border: "1.5px solid #A808C8",
              borderRadius: 4,
            },
          },
        }}
      >
        <MenuItem
          onClick={scrollToSection(
            liveSection as unknown as RefObject<HTMLDivElement>
          )}
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 13,
            fontWeight: 500,
            "&:hover": { bgcolor: "#8C06B0", color: "white" },
            "&.Mui-focusVisible": {
              backgroundColor: "transparent",
            },
            "&.Mui-focusVisible:hover": {
              backgroundColor: "#8C06B0",
              color: "white",
            },
            "&:focus": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Live style={{ marginRight: "10px" }} />
          Live Activity
        </MenuItem>
        <MenuItem
          onClick={scrollToSection(
            calculatorSection as unknown as RefObject<HTMLDivElement>
          )}
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 13,
            fontWeight: 500,
            "&:hover": { bgcolor: "#8C06B0", color: "white" },
          }}
        >
          <Calculator style={{ marginRight: "10px" }} />
          Traders Calculator
        </MenuItem>
        <MenuItem
          onClick={scrollToSection(
            contactsSection as unknown as RefObject<HTMLDivElement>
          )}
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 13,
            fontWeight: 500,
            "&:hover": { bgcolor: "#8C06B0", color: "white" },
          }}
        >
          <TrustLinkSymbol style={{ marginRight: "10px" }} />
          Contacts
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={handleClose}
          sx={{
            width: "95%",
            justifySelf: "center",
            bgcolor: "#8C06B0",
            color: "white",
            borderRadius: "20px",
            fontFamily: '"Inter", sans-serif',
            fontSize: 13,
            fontWeight: 500,
            transition: "0.5s",
            "&:hover": {
              bgcolor: "#8C06B0",
              color: "white",
              boxShadow: 3,
            },
          }}
        >
          <Typography sx={{ width: "100%", textAlign: "center" }}>
            Join Now!
          </Typography>
        </MenuItem>
      </Menu>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <TrustLinkSymbol />
        <TrustLink />
      </Box>
      <Flag style={{ cursor: "pointer" }} />
    </Box>
  );
};
