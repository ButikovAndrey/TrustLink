import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const SNavContainer: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  bgcolor: "white",
  mb: 5,
  zIndex: 5,
};

export const SMenu: SxProps = {
  bgcolor: "#FBE8FF",
  color: "#A808C8",
  border: "1.5px solid #A808C8",
  borderRadius: 4,
};

export const SMenuItem: SxProps = {
  fontFamily: '"Inter", sans-serif',
  fontSize: 13,
  fontWeight: 500,
  "&:hover": { bgcolor: "#8C06B0", color: "white" },
};

export const SJoinBurger: SxProps = {
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
  "&:focus": {
    bgcolor: "#8C06B0",
    color: "white",
  },
};

export const SDivider: SxProps = { my: 0.5 };

export const SIcon: CSSProperties = { marginRight: "10px" };

export const SJoinTitle: SxProps = { width: "100%", textAlign: "center" };

export const SHeadLogo: SxProps = {
  display: "flex",
  gap: 1,
  alignItems: "center",
};

export const SFlag: CSSProperties = { cursor: "pointer" };
