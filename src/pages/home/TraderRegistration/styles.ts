import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const SModalContainer: SxProps = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  maxWidth: 900,
  maxHeight: "95vh",
  bgcolor: "background.paper",
  borderRadius: "40px",
  boxSizing: "border-box",
  boxShadow: 24,
  overflow: "auto",
};

export const SModalBoxInner: SxProps = {
  py: "40px",
  px: {
    xs: 2.5,
    sm: 5,
    md: "60px",
  },
};

export const STitle: SxProps = {
  width: "100%",
  fontFamily: '"Manrope", sans-serif',
  fontSize: 25,
  fontWeight: 400,
  color: "#1B2128",
  textAlign: "center",
  m: 0,
  p: 0,
};

export const SKYCBox: SxProps = {
  bgcolor: "#FDF0FF",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  px: "30px",
  py: "20px",
  mt: "20px",
};

export const SKYCTitle: SxProps = {
  width: "100%",
  fontFamily: '"Manrope", sans-serif',
  fontSize: 15,
  fontWeight: 400,
  color: "#A808C8",
  mb: "10px",
  p: 0,
};

export const SKYCButtonsBox: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  gap: 1,
};

export const SOKMark: CSSProperties = { marginRight: "2px" };

export const SButton = (isSelected: boolean): SxProps => {
  return {
    textTransform: "none",
    borderRadius: 30,
    boxShadow: "none",
    bgcolor: isSelected ? "#FDF0FF" : "white",
    color: "#A808C8",
    fontFamily: '"Manrope", sans-serif',
    fontWeight: 500,
    fontSize: 25,
    width: "100%",
    height: 60,
    py: 1,
    transition: "background-color 0.5s",
    "&:hover": {
      boxShadow: "none",
    },
  };
};

export const SBottobButtonsBox: SxProps = {
  display: "flex",
  width: "100%",
  mt: "20px",
};

export const SBackButton: SxProps = {
  textTransform: "none",
  borderRadius: 30,
  boxShadow: "none",
  bgcolor: "#F7D0FF",
  color: "#A808C8",
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 25,
  width: 117,
  height: 60,
  mr: "20px",
  py: 1,
  transition: "background-color 0.5s",
  "&:hover": {
    boxShadow: "none",
  },
};

export const SSubmitButton: SxProps = {
  textTransform: "none",
  borderRadius: 30,
  boxShadow: "none",
  bgcolor: "#A808C8",
  color: "white",
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 25,
  lineHeight: 1,
  width: "100%",
  height: 60,
  py: 1,
  transition: "background-color 0.5s",
  "&:hover": {
    boxShadow: "none",
  },
};

export const SRFContainer: SxProps = {
  width: "100%",
  height: 105,
  bgcolor: "#FDF0FF",
  borderRadius: "40px",
  boxSizing: "border-box",
  py: "20px",
  px: "30px",
  mt: "20px",
};

export const SRFTitle: SxProps = {
  width: "100%",
  fontFamily: '"Manrope", sans-serif',
  fontSize: 15,
  fontWeight: 500,
  color: "#A808C8",
};

export const SRFInnerBox: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const SRFForm: SxProps = {
  p: 0,
  m: 0,
  ml: { xs: 1.5, sm: 2, md: "18px" },
  flex: 1,
  width: "100%",
};

export const SRFTextField: SxProps = {
  p: 0,
  m: 0,
  "& .MuiOutlinedInput-input": {
    px: 0,
    py: 1,
    fontFamily: '"Manrope", sans-serif',
    fontSize: 25,
    color: "#440A8F",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& input::placeholder": {
    fontFamily: '"Manrope", sans-serif',
    fontSize: { xs: 20, sm: 22, md: 25 },
    fontWeight: 500,
    color: "#F7D0FF",
    opacity: 1,
  },
  "& input:-webkit-autofill": {
    WebkitTextFillColor: "#440A8F",
    WebkitBoxShadow: "none",
    bgcolor: "#FDF0FF",
    transition: "background-color 9999s ease-in-out 0s",
  },
};

export const SFRSelect: SxProps = {
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
  "& .MuiSelect-select": { paddingLeft: 0 },
};

export const SRFSelected: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontSize: 25,
  fontWeight: 400,
  color: "#440A8F",
};

export const SRFPlaceholder: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontSize: { xs: 20, sm: 22, md: 25 },
  fontWeight: 500,
  color: "#F7D0FF",
};
