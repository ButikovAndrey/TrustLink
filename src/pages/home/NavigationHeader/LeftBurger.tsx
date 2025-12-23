import { Burger } from "@/icons";
import { burgerItems } from "./constants";
import {
  SDivider,
  SIcon,
  SJoinBurger,
  SJoinTitle,
  SMenu,
  SMenuItem,
} from "./styles";
import { useAppStore } from "@/store";
import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, RefObject, useState } from "react";

type PropsType = {
  liveSection: RefObject<null>;
  calculatorSection: RefObject<null>;
  contactsSection: RefObject<null>;
};

export const LeftBurger = ({
  liveSection,
  calculatorSection,
  contactsSection,
}: PropsType) => {
  const setOpenTR = useAppStore((store) => store.setOpenTR);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<SVGSVGElement>) => {
    //@ts-expect-error no anchor found
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onJoinClick = () => {
    setOpenTR();
    handleClose();
  };

  const scrollToSection = (position: number) => () => {
    let ref;
    switch (position) {
      case 0:
        ref = liveSection;
        break;
      case 1:
        ref = calculatorSection;
        break;
      default:
        ref = contactsSection;
        break;
    }
    if (ref && ref.current) {
      (ref.current as HTMLDivElement).scrollIntoView({
        behavior: "smooth",
      });
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Burger
        id="menu-button"
        cursor="pointer"
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
            sx: SMenu,
          },
        }}
      >
        {burgerItems.map(({ title, Icon }, index) => {
          return (
            <MenuItem
              key={title}
              onClick={scrollToSection(index)}
              sx={SMenuItem}
            >
              <Icon style={SIcon} />
              {title}
            </MenuItem>
          );
        })}
        <Divider sx={SDivider} />
        <MenuItem autoFocus onClick={onJoinClick} sx={SJoinBurger}>
          <Typography sx={SJoinTitle}>Join Now!</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
