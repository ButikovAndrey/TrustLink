import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const SSContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  mb: "40px",
  gap: { xs: 1.5, sm: "20px" },
  flexWrap: "wrap",
  px: { xs: 0.5, sm: 2 },
  boxSizing: "border-box",
};

export const SSInnerBox: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  mb: "40px",
  gap: "20px",
  flexWrap: "wrap",
  px: { xs: 0.5, sm: 2 },
  boxSizing: "border-box",
};

export const SSTitleContainer = (isFinalStep: boolean): SxProps => {
  return {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    mt: isFinalStep ? 3.5 : { xs: 4, sm: 10, md: 20 },
  };
};

export const SSTitle: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 400,
  fontSize: 25,
  color: "#1B2128",
  textAlign: "center",
};

export const SSSubtitle: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 400,
  fontSize: 15,
  color: "#868686",
  textAlign: "center",
};

export const SS0Button = (isSelected: boolean): SxProps => {
  return {
    textTransform: "none",
    borderRadius: 30,
    boxShadow: "none",
    bgcolor: isSelected ? undefined : "#F7D0FF",
    color: "#A808C8",
    fontFamily: '"Manrope", sans-serif',
    fontWeight: 500,
    fontSize: 25,
    width: 225,
    height: 60,
    py: 1,
    transition: "background-color 0.5s",
    "&:hover": {
      boxShadow: "none",
      bgcolor: isSelected ? undefined : "#f2b7feff",
    },
  };
};

export const SS1Button = (isSelected: boolean): SxProps => {
  return {
    textTransform: "none",
    borderRadius: 30,
    boxShadow: "none",
    bgcolor: isSelected ? undefined : "#F7D0FF",
    color: "#A808C8",
    fontFamily: '"Manrope", sans-serif',
    fontWeight: 500,
    fontSize: 25,
    width: 302,
    height: 60,
    py: 1,
    transition: "background-color 0.5s",
    "&:hover": {
      boxShadow: "none",
      bgcolor: isSelected ? undefined : "#f2b7feff",
    },
  };
};

export const SS2Button = ({
  isSelected,
  bgcolor,
}: {
  isSelected: boolean;
  bgcolor: string;
}): SxProps => {
  return {
    borderRadius: 30,
    boxShadow: "none",
    bgcolor: isSelected ? undefined : bgcolor,
    width: 142,
    height: 60,
    py: 1,
  };
};

export const SS2Icon = (isWide: boolean): CSSProperties => {
  return { width: isWide ? "47px" : "25px", height: isWide ? "34px" : "25px" };
};

export const SS3ButtonNameBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 0,
};

export const SS2ButtonName = ({
  fontSize,
  color,
  isSelected,
}: {
  fontSize: number;
  color: string;
  isSelected: boolean;
}): SxProps => ({
  fontFamily: '"Manrope", sans-serif',
  fontSize,
  fontWeight: 500,
  color: isSelected ? "#A808C8" : color,
  textWrap: "nowrap",
  textTransform: "none",
  lineHeight: 1,
});

export const SS3Container: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: { xs: "column", sm: "row" },
  gap: { xs: 2, sm: "20px" },
  mb: 0,
};

export const SS3InnerBox: SxProps = {
  display: {
    xs: "flex",
    sm: "none",
  },
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
};

export const SS3BigButton: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 15,
  borderRadius: 16,
  width: 82,
  height: 36,
  textWrap: "nowrap",
  px: 0,
};

export const SS3SmallButton: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 15,
  borderRadius: 16,
  width: 82,
  height: 36,
  px: 0,
  display: {
    xs: "none",
    sm: "block",
  },
  textWrap: "nowrap",
};

export const SS3SliderBox: SxProps = {
  width: {
    xs: 254,
    sm: 320,
    md: 452,
  },
};

export const SS3Slider: SxProps = {
  "& .MuiSlider-valueLabel": {
    fontFamily: '"Manrope", sans-serif',
    fontWeight: 500,
    bgcolor: "#F7D0FF",
    color: "#A808C8",
    fontSize: 15,
    borderRadius: "4px",
  },
  "& .MuiSlider-thumb": {
    width: 30,
    height: 30,
    border: "2px solid white",
  },
  "& .MuiSlider-rail": {
    height: "15px",
  },
  "& .MuiSlider-track": {
    height: "15px",
    borderRadius: 4,
  },
};

export const SS3RangeInfo: SxProps = {
  display: "block",
  width: "100%",
  textAlign: "center",
  fontWeight: 500,
  color: "#A808C8",
  fontSize: 15,
  p: 0,
  m: 0,
};

export const SS4Container: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  width: "100%",
  gap: "20px",
  justifyContent: { xs: undefined, sm: "center" },
  alignItems: { xs: "flex-start", sm: undefined },
};

export const SS4InfoBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  px: "30px",
  py: "20px",
  bgcolor: "#FDF0FF",
  borderRadius: "40px",
  flex: 1,
  maxWidth: { xs: "100%", sm: 380 },
  width: { xs: "100%", sm: 380 },
};

export const SS4InfoInnerBox: SxProps = {
  display: "flex",
  width: "100%",
  minHeight: "55px",
  borderRadius: "99px",
  bgcolor: "#F7D0FF",
  gap: 1,
  boxSizing: "border-box",
  px: "25px",
  alignItems: "center",
};

export const SS4InfoTitle: SxProps = {
  color: "#440A8F",
  fontFamily: '"Manrope", sans-serif',
  fontSize: 25,
};

export const SS4InfoContentBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "55px",
  boxSizing: "border-box",
  px: "30px",
};

export const SS4ContentTitle: SxProps = {
  mt: "10px",
  mb: "1px",
  fontFamily: '"Manrope", sans-serif',
  fontSize: 15,
  fontWeight: 700,
  color: "#A808C8",
};

export const SS4ContentDescription: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontSize: 15,
  fontWeight: 500,
  color: "#A808C8",
};
