import { Flag } from "@/icons";
import { flagItems } from "./constants";
import { SIcon, SMenu, SMenuItem } from "./styles";
import { Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";

export const RigthtFlag = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<SVGSVGElement>) => {
    //@ts-expect-error no anchor found
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Flag
        cursor="pointer"
        aria-controls={open ? "contact-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="contact-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: SMenu,
          },
          list: {
            autoFocusItem: false,
          },
        }}
      >
        {flagItems.map(({ title, Icon }) => {
          return (
            <MenuItem key={title} onClick={() => {}} sx={SMenuItem}>
              <Icon style={SIcon} />
              {title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
