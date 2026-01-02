import { SxProps } from "@mui/material";

export const SCalcContainer: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

export const SCalcBoxInner: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: 900,
};

export const SCalcTitleBox: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: {
    xs: 1,
    sm: "10px",
  },
};

export const SCalcTitle: SxProps = {
  m: 0,
  p: 0,
  fontFamily: '"Manrope", sans-serif',
  fontSize: {
    xs: 32,
    sm: 36,
    md: 40,
  },
  textAlign: "center",
  color: "#1B2128",
};

export const SCalcSubtitle: SxProps = {
  fontFamily: '"Manrope", sans-serif',
  fontSize: {
    xs: 20,
    sm: 22,
    md: 25,
  },
  textAlign: "center",
  color: "#1B2128",
};

export const SCalcChooseBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  boxSizing: "border-box",
  border: "5px solid #F6F8FA",
  borderRadius: "40px",
  minHeight: 500,
  mt: "50px",
};
