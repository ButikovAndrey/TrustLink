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
    xs: `${(MAX_VISIBLE / 2) * ROW_HEIGHT * MOBILE_MULTIPLYER - 40}px`,
    md: `${MAX_VISIBLE * ROW_HEIGHT - 10}px`,
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
    mb: { xs: "20px", md: 1.1 },
  };
};

export const SRowBoxOuter: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  width: "100%",
  height: { xs: 180, md: 45 },
  px: { xs: 2, md: undefined },
  py: { xs: 2, md: undefined },
  justifyContent: { xs: "space-around", md: undefined },
  border: "1px solid #A808C8",
  borderRadius: { xs: "20px", md: 7 },
  boxSizing: "border-box",
};

export const SRowBoxInner: SxProps = {
  display: "flex",
  alignItems: "center",
  width: { xs: "100%", md: 200 },
  justifyContent: "flex-start",
  px: 0.5,
};

export const SPersonBox: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: { xs: "100%", md: 165 },
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
  justifyContent: "space-between",
  alignItems: "center",
  gap: 1,
  textWrap: "nowrap",
};

export const SRowAmount: SxProps = {
  color: "#5A5A5A",
  fontFamily: '"Inter", sans-serif',
  fontSize: 12.7,
  fontWeight: 500,
};

export const SArrowBox = (isPositive: boolean): SxProps => {
  return {
    display: "flex",
    height: 26.5,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "40px",
    bgcolor: isPositive ? "#F0FEED" : "#FFEBE8",
    textWrap: "nowrap",
  };
};

export const SArrowText = (isPositive: boolean): SxProps => {
  return {
    color: isPositive ? "#259800" : "#FF1818",
    fontFamily: '"Inter", sans-serif',
    fontSize: 13,
    fontWeight: 500,
  };
};

export const SCommentContainer: SxProps = {
  display: "flex",
  px: { xs: 0.5, md: undefined },
  ml: 2,
};

export const SCommentBox: SxProps = {
  display: "flex",
  height: "100%",
  width: 60,
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
  px: 1,
  textWrap: "nowrap",
  width: "fit-content",
};

export const SCommentText: SxProps = {
  color: "#437830",
  fontFamily: '"Inter", sans-serif',
  fontSize: 13,
};

export const SCourceBox: SxProps = {
  display: "flex",
  height: "100%",
  width: { xs: undefined, md: 100 },
  minWidth: { xs: undefined, md: 100 },
  alignItems: "center",
  justifyContent: "flex-start",
  mr: { xs: 1, md: undefined },
};

export const SSourceBoxInner = (bgcolor: string): SxProps => {
  return {
    display: "flex",
    width: { xs: 85, sm: 85 },
    minWidth: { xs: 85, sm: 85 },
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
  width: { xs: "100%", sm: 140 },
  minWidth: { xs: "100%", sm: 140 },
  alignItems: "center",
  justifyContent: "flex-start",
  ml: 1,
};

export const SPaymentMethodBoxInner: SxProps = {
  display: "flex",
  width: 80,
  minWidth: 80,
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

export const SMiddleBox: SxProps = { width: 90 };

export const SRowAmountInner: SxProps = {
  display: "flex",
  height: "26.5px",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 1,
  px: 1.5,
  borderRadius: 5,
  bgcolor: "#F8F8F8",
};

export const SCommentOuter: SxProps = { width: 155 };
