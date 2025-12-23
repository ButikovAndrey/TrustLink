import { Banner } from "@/icons";
import { headerFaces } from "./constants";
import {
  SBanner,
  SCommentBox,
  SHeadAnimationContainer,
  SHeaderInnerContainer,
  SHeadTitle,
  SLeftContainerBox,
  SPaymentBox,
  SPaymentText,
  SPersonIcon,
  SPersonIconBox,
  SToggleContainer,
} from "./styles";
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
    <Box sx={SHeaderInnerContainer}>
      <Box sx={SHeadAnimationContainer}>
        <Box sx={SPersonIconBox(fade)}>
          <values.personIcon style={SPersonIcon} />
        </Box>
        <Box sx={SToggleContainer}>
          <Box sx={SLeftContainerBox(fade, values.toggle)}>
            <Box sx={SPaymentBox(values.paymentBGcolor)}>
              <values.paymentIcon />
              <Typography sx={SPaymentText(values.paymentTextColor)}>
                {values.paymentName}
              </Typography>
            </Box>
          </Box>
          <Typography sx={SCommentBox(fade, values.toggle)}>
            {values.comment}
          </Typography>
        </Box>
        <Typography sx={SHeadTitle} component="h1">
          Real-time transaction platform for traders
        </Typography>
      </Box>
      <Banner style={SBanner} />
    </Box>
  );
};
