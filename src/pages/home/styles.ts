import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const SHeaderContainer: SxProps = { py: 3, px: 0 };
export const SHeaderInnerContainer: SxProps = {
  width: "100%",
  height: 380,
  position: "relative",
  mt: 3,
  mb: "110px",
  bgcolor: "#FDF0FF",
};
export const SHeadAnimationContainer: SxProps = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
};
export const SHeadTitle: SxProps = {
  display: "inline-block",
  width: "97%",
  maxWidth: 790,
  textAlign: "center",
  fontSize: {
    xs: 30,
    sm: 40,
    md: 50,
  },
  lineHeight: "60px",
  fontFamily: '"Manrope", sans-serif',
  letterSpacing: "-2%",
  color: "#1B2128",
};
export const SBanner: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
};
export const SLiveContainer: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  mb: "130px",
};
export const SLiveInnerBox: SxProps = { width: "100%", maxWidth: 790 };
