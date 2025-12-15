import { PayIn, PayOut } from "@/icons";
import { Box, Typography } from "@mui/material";

export const Step4 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        gap: "20px",
        justifyContent: { xs: undefined, sm: "center" },
        alignItems: { xs: "flex-start", sm: undefined },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          px: "30px",
          py: "20px",
          bgcolor: "#FDF0FF",
          borderRadius: "40px",
          flex: 1,
          maxWidth: 380,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            minHeight: "55px",
            borderRadius: "99px",
            bgcolor: "#F7D0FF",
            gap: 1,
            boxSizing: "border-box",
            px: "25px",
            alignItems: "center",
          }}
        >
          <PayIn />
          <Typography
            sx={{
              color: "#440A8F",
              fontFamily: '"Manrope", sans-serif',
              fontSize: 25,
            }}
          >
            {"PayIN: 10,150 ₽"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "55px",
            boxSizing: "border-box",
            px: "30px",
          }}
        >
          <Typography
            sx={{
              mt: "10px",
              mb: "1px",
              fontFamily: '"Manrope", sans-serif',
              fontSize: 15,
              fontWeight: 700,
              color: "#A808C8",
            }}
          >
            {"SPB Counterparties:"}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: 15,
              fontWeight: 500,
              color: "#A808C8",
            }}
          >
            {"70,000 (7.5%) → 5,250 ₽"}
          </Typography>
          <Typography
            sx={{
              mt: "10px",
              mb: "1px",
              fontFamily: '"Manrope", sans-serif',
              fontSize: 15,
              fontWeight: 700,
              color: "#A808C8",
            }}
          >
            {"BT:"}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: 15,
              fontWeight: 500,
              color: "#A808C8",
            }}
          >
            {"70,000 (7%) → 4,900 ₽"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          px: "30px",
          py: "20px",
          bgcolor: "#FDF0FF",
          borderRadius: "40px",
          flex: 1,
          maxWidth: 380,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            minHeight: "55px",
            borderRadius: "99px",
            bgcolor: "#F7D0FF",
            gap: 1,
            boxSizing: "border-box",
            px: "25px",
            alignItems: "center",
          }}
        >
          <PayOut />
          <Typography
            sx={{
              color: "#440A8F",
              fontFamily: '"Manrope", sans-serif',
              fontSize: 25,
            }}
          >
            {"PayOUT: 2,800 ₽"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "55px",
            boxSizing: "border-box",
            px: "30px",
          }}
        >
          <Typography
            sx={{
              mt: "10px",
              mb: "1px",
              fontFamily: '"Manrope", sans-serif',
              fontSize: 15,
              fontWeight: 700,
              color: "#A808C8",
            }}
          >
            {"Total turnover:"}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: 15,
              fontWeight: 500,
              color: "#A808C8",
            }}
          >
            {"140,000 (2%) → 2,800 ₽"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
