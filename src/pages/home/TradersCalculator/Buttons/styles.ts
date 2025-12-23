import { SxProps } from "@mui/material";

export const SSBBox: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  mb: "40px",
  gap: "20px",
  flexWrap: "wrap",
  px: { xs: "20px", sm: "40px", md: "60px" },
  boxSizing: "border-box",
};

export const SSBPrevButton: SxProps = {
  textTransform: "none",
  borderRadius: 30,
  boxShadow: "none",
  bgcolor: "#F7D0FF",
  color: "#A808C8",
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 25,
  px: 3.6,
  py: 1,
  transition: "background-color 0.5s",
  "&:hover": {
    boxShadow: "none",
    bgcolor: "#f2b7feff",
  },
};

export const SSBNextButton: SxProps = {
  textTransform: "none",
  borderRadius: 30,
  boxShadow: "none",
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 25,
  px: 3.6,
  py: 1,
  "&:hover": {
    boxShadow: "none",
  },
};

export const SSBRetryButton: SxProps = {
  textTransform: "none",
  borderRadius: 30,
  boxShadow: "none",
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 25,
  px: 3.6,
  py: 1,
  "&:hover": {
    boxShadow: "none",
  },
};

export const SSBJoinButton: SxProps = {
  textTransform: "none",
  textWrap: "nowrap",
  minWidth: 180,
  borderRadius: 30,
  boxShadow: "none",
  fontFamily: '"Manrope", sans-serif',
  fontWeight: 500,
  fontSize: 25,
  px: 3.6,
  py: 1,
  flex: 1,
  "&:hover": {
    boxShadow: "none",
  },
};
