import { headerFaces } from "@/pages/home/AnimatedHead/constants";
import { Box, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export const AnimatedHead = () => {
  const [personParams, setPersonParams] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setPersonParams((prev) => (headerFaces[prev + 1] ? prev + 1 : 0));
        requestAnimationFrame(() => {
          setFade(false);
        });
      }, 200);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const values = useMemo(() => headerFaces[personParams], [personParams]);

  return (
    <>
      <Box sx={{ transition: "opacity 0.4s", opacity: fade ? 0.1 : 1 }}>
        <values.personIcon style={{ borderRadius: "50%" }} />
      </Box>
      <Box
        sx={{
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
        }}
      >
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            opacity: fade ? 0.7 : 1,
            transition: "0.5s",
            transform: values.toggle ? "translateX(100%)" : "translateX(0)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              bgcolor: values.paymentBGcolor,
              borderRadius: 38,
              height: 28,
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <values.paymentIcon />
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                color: values.paymentTextColor,
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              {values.paymentName}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            color: fade ? "#F7D0FF" : "#A808C8",
            fontWeight: 500,
            fontSize: 13,
            width: "50%",
            textAlign: "center",
            opacity: fade ? 0.25 : 1,
            transition: "0.8s",
            transform: values.toggle ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          {values.comment}
        </Typography>
      </Box>
    </>
  );
};
