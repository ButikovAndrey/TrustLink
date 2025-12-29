import { PayIn, PayOut } from "@/icons";
import {
  SS4Container,
  SS4ContentDescription,
  SS4ContentTitle,
  SS4InfoBox,
  SS4InfoContentBox,
  SS4InfoInnerBox,
  SS4InfoTitle,
} from "./styles";
import { Box, Typography } from "@mui/material";
import { useAppStore } from "@/store";
import {
  calculateComission,
  getCurrencySymbol,
  isPayOUT,
} from "@/pages/home/TradersCalculator/Steps/helpers";
import * as React from "react";

export const Step4 = () => {
  const step1 = useAppStore((store) => store.step1value);
  const paymentMethods = useAppStore((store) => store.step2value);
  const range = useAppStore((store) => store.step3value);
  const currency = useAppStore((store) => store.step0value);
  const payInComission = calculateComission({ paymentMethods, range });
  const payOutComission = calculateComission({
    paymentMethods,
    range,
    isPayOUT: true,
  });
  const currencySymbol = getCurrencySymbol(currency);
  return (
    <Box sx={SS4Container}>
      <Box sx={SS4InfoBox}>
        <Box sx={SS4InfoInnerBox}>
          <PayIn />
          <Typography sx={SS4InfoTitle}>{`PayIN: ${
            payInComission[payInComission.length - 1].totalIncome
          } ${getCurrencySymbol(currency)}`}</Typography>
        </Box>
        <Box sx={SS4InfoContentBox}>
          {payInComission.map(
            ({ paymentMethod, midRange, percent, income }) => (
              <React.Fragment key={paymentMethod}>
                <Typography sx={SS4ContentTitle}>
                  {`${paymentMethod}:`}
                </Typography>
                <Typography sx={SS4ContentDescription}>
                  {`${midRange} (${percent}%) → ${income} ${currencySymbol}`}
                </Typography>
              </React.Fragment>
            )
          )}
        </Box>
      </Box>
      {isPayOUT(step1) && (
        <Box sx={SS4InfoBox}>
          <Box sx={SS4InfoInnerBox}>
            <PayOut />
            <Typography sx={SS4InfoTitle}>{`PayOUT: ${
              payOutComission[payOutComission.length - 1].totalIncome
            } ${getCurrencySymbol(currency)}`}</Typography>
          </Box>
          <Box sx={SS4InfoContentBox}>
            {payOutComission.map(
              ({ paymentMethod, midRange, percent, income }) => (
                <React.Fragment key={paymentMethod}>
                  <Typography sx={SS4ContentTitle}>
                    {`${paymentMethod}:`}
                  </Typography>
                  <Typography sx={SS4ContentDescription}>
                    {`${midRange} (${percent}%) → ${income} ${currencySymbol}`}
                  </Typography>
                </React.Fragment>
              )
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
