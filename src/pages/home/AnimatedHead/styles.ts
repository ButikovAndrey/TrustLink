import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const SPersonIconBox = (fade: boolean): SxProps => ({
  transition: "opacity 0.4s",
  opacity: fade ? 0.1 : 1,
});
export const SPersonIcon: CSSProperties = { borderRadius: "50%" };
export const SToggleContainer: SxProps = {
  display: "flex",
  position: "relative",
  width: 210,
  height: 35,
  borderRadius: "38px",
  bgcolor: "#F7D0FF",
  mt: "10px",
  mb: "20px",
  alignItems: "center",
  px: "10px",
};
export const SLeftContainerBox = (fade: boolean, toggle: boolean): SxProps => ({
  position: "relative",
  width: "50%",
  textAlign: "center",
  opacity: fade ? 0.7 : 1,
  transition: "0.5s",
  transform: toggle ? "translateX(100%)" : "translateX(0)",
  zIndex: 2,
});
export const SPaymentBox = (bgcolor: string): SxProps => ({
  display: "flex",
  bgcolor,
  borderRadius: 38,
  height: 28,
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
});
export const SPaymentText = (color: string): SxProps => ({
  fontFamily: '"Inter", sans-serif',
  color,
  fontWeight: 500,
  fontSize: 13,
});

export const SCommentBox = (fade: boolean, toggle: boolean): SxProps => ({
  position: "relative",
  fontFamily: '"Inter", sans-serif',
  color: fade ? "#F7D0FF" : "#A808C8",
  fontWeight: 500,
  fontSize: 13,
  width: "50%",
  textAlign: "center",
  opacity: fade ? 0.25 : 1,
  transform: toggle ? "translateX(-100%)" : "translateX(0)",
  transition: "0.8s",
  zIndex: 1,
});
