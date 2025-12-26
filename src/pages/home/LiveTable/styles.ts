import { CSSProperties } from "react";
import {
  ANIM_DURATION,
  HIGHLIGHT_DURATION,
  MAX_VISIBLE,
  MOBILE_MULTIPLYER,
  ROW_HEIGHT,
} from "./constants";
import { SxProps } from "@mui/material";

export const SLiveTableContainer: SxProps = {
  display: "flex",
  gap: 1,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  mb: "50px",
};

export const SRowBoxInner_1: SxProps = { display: "flex", width: "100%" };

export const STitle: SxProps = {
  fontWeight: 400,
  fontFamily: '"Manrope", sans-serif',
  fontSize: {
    xs: 28,
    sm: 32,
    md: 40,
  },
  color: "#1B2128",
};

export const SLiveTableBox: SxProps = {
  height: {
    xs: `${MAX_VISIBLE * ROW_HEIGHT * MOBILE_MULTIPLYER}px`,
    md: `${MAX_VISIBLE * ROW_HEIGHT}px`,
  },
  overflow: "hidden",
  width: "100%",
  maxWidth: 790,
  mb: "15px",
};

export const SRowContainer = ({
  shift,
  transitionEnabled,
}: {
  shift: number;
  transitionEnabled: boolean;
}): SxProps => {
  return {
    display: "flex",
    flexDirection: "column",
    transform: `translateY(${shift}px)`,
    transition: transitionEnabled
      ? `transform ${ANIM_DURATION}ms ease`
      : "none",
    overflow: "auto",
  };
};

export const SRowBox = (current: boolean): SxProps => {
  return {
    height: {
      xs: `${ROW_HEIGHT * MOBILE_MULTIPLYER}px`,
      md: `${ROW_HEIGHT}px`,
    },
    bgcolor: current ? "#F0FEED" : "transparent",
    opacity: current ? 0.75 : 1,
    transition: `${HIGHLIGHT_DURATION}ms`,
    mb: { xs: 2, md: 1 },
  };
};

export const SRowBoxOuter: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  width: "100%",
  height: { xs: 90, md: 45 },
  justifyContent: { xs: "space-around", md: undefined },
  border: "1px solid #E4E4E4",
  borderRadius: "4.2px",
  boxSizing: "border-box",
};

export const SRowBoxInner: SxProps = {
  display: "flex",
  alignItems: "center",
  width: 200,
  height: "100%",
  justifyContent: "flex-start",
  px: 0.5,
};

export const SPersonBox: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: 165,
  minWidth: 165,
  gap: 1,
  textWrap: "nowrap",
  bgcolor: "#F2F8FF",
  borderRadius: 40,
  height: 32,
  px: 1,
};

export const SPersonIcon: CSSProperties = {
  width: "21px",
  height: "21px",
  borderRadius: "50%",
  textWrap: "nowrap",
  marginLeft: "3px",
};

export const SPersonName: SxProps = {
  color: "#727272",
  fontFamily: '"Inter", sans-serif',
  fontSize: 15,
  fontWeight: 300,
};

export const SRowAmountBox: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 1,
  textWrap: "nowrap",
  width: 155,
  minWidth: 155,
};

export const SRowAmount: SxProps = {
  color: "#727272",
  fontFamily: '"Inter", sans-serif',
  fontSize: 13,
  fontWeight: 500,
};

export const SArrowBox = (isPositive: boolean): SxProps => {
  return {
    display: "flex",
    height: 26.5,
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    borderRadius: "40px",
    bgcolor: isPositive ? "#F0FEED" : "#FFEBE8",
    px: 1,
    textWrap: "nowrap",
  };
};

export const SArrowText = (isPositive: boolean): SxProps => {
  return {
    color: isPositive ? "#259800" : "#FF1818",
    pr: 1,
    fontFamily: '"Inter", sans-serif',
    fontSize: 13,
    fontWeight: 500,
  };
};

export const SCommentBox: SxProps = {
  display: "flex",
  height: "100%",
  width: { xs: undefined, md: 155 },
  minWidth: { xs: undefined, md: 155 },
  alignItems: "center",
  justifyContent: "flex-start",
};

export const SComment: SxProps = {
  display: "flex",
  height: 27,
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 1,
  borderRadius: "40px",
  bgcolor: "#F8F8F8",
  px: 1,
  textWrap: "nowrap",
};

export const SCommentText: SxProps = {
  color: "#5A5A5A",
  fontFamily: '"Inter", sans-serif',
  fontSize: 13,
  fontWeight: 500,
};

export const SCourceBox: SxProps = {
  display: "flex",
  height: "100%",
  width: { xs: undefined, sm: 135 },
  minWidth: { xs: undefined, sm: 135 },
  alignItems: "center",
  justifyContent: "flex-start",
};

export const SSourceBoxInner = (bgcolor: string): SxProps => {
  return {
    display: "flex",
    width: { xs: 85, sm: 100 },
    minWidth: { xs: 85, sm: 100 },
    height: 27,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 1,
    borderRadius: "40px",
    bgcolor,
    px: 1,
  };
};

export const SSourceBoxText = (color: string): SxProps => {
  return {
    color,
    fontFamily: '"Inter", sans-serif',
    fontSize: 13,
    fontWeight: 500,
  };
};

export const SPaymentMethodBox: SxProps = {
  display: "flex",
  height: "100%",
  width: { xs: undefined, sm: 145 },
  minWidth: { xs: undefined, sm: 145 },
  alignItems: "center",
  justifyContent: "flex-start",
};

export const SPaymentMethodBoxInner: SxProps = {
  display: "flex",
  width: { xs: 80, sm: 100 },
  minWidth: { xs: 80, sm: 100 },
  height: 27,
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 1,
  borderRadius: "40px",
  bgcolor: "#F0FEED",
  px: 1,
  mr: { xs: 1, md: undefined },
};

export const SPaymentMethodText: SxProps = {
  color: "#259800",
  fontFamily: '"Inter", sans-serif',
  fontSize: 13,
  fontWeight: 500,
};
