import { SxProps } from "@mui/material";

export const SFooterContainer: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  mt: "100px",
  p: {
    xs: 0.5,
    sm: 1,
    md: 2,
  },
};
export const SFooterLeftBox: SxProps = {
  display: "flex",
  flex: 1,
  width: "50%",
  alignItems: "center",
  justifyContent: {
    xs: "center",
    sm: "flex-start",
  },
  flexDirection: {
    xs: "column",
    sm: "row",
  },
};
export const SFooterRightBox: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
  alignContent: "flex-start",
  width: "50%",
};
export const SSitemapSection: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: 215,
};
export const SFooterTitle: SxProps = {
  color: "#440A8F",
  fontFamily: '"Montserat", sans-serif',
  mb: "20px",
  fontWeight: 700,
};
export const SFooterLink: SxProps = {
  color: "#737373",
  mb: "10px",
  cursor: "pointer",
  fontFamily: '"Montserat", sans-serif',
  fontWeight: 500,
  transition: "color 0.5s",
  pr: 1.5,
  "&:hover": {
    color: "black",
  },
};
export const SResourcesBox: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};
