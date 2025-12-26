import { ArrowDown, ArrowUp, Ellipse } from "@/icons";
import { ITableCotent } from "./constants";
import {
  SArrowBox,
  SArrowText,
  SComment,
  SCommentBox,
  SCommentText,
  SCourceBox,
  SPaymentMethodBox,
  SPaymentMethodBoxInner,
  SPaymentMethodText,
  SPersonBox,
  SPersonIcon,
  SPersonName,
  SRowAmount,
  SRowAmountBox,
  SRowBoxInner,
  SRowBoxOuter,
  SSourceBoxInner,
  SSourceBoxText,
  SRowBoxInner_1,
} from "./styles";
import { Box, Typography } from "@mui/material";

type PropsType = {
  row: ITableCotent;
};

export const TableRow = ({ row }: PropsType) => {
  return (
    <Box sx={SRowBoxOuter}>
      <Box sx={SRowBoxInner_1}>
        <Box sx={SRowBoxInner}>
          <Box sx={SPersonBox}>
            <row.personIcon style={SPersonIcon} />
            <Typography sx={SPersonName}>{row.personName}</Typography>
          </Box>
        </Box>
        <Box sx={SRowAmountBox}>
          <Typography sx={SRowAmount}>{row.amount}</Typography>
          <Box sx={SArrowBox(row.margin > 0)}>
            {row.margin > 0 ? <ArrowUp /> : <ArrowDown />}
            <Typography sx={SArrowText(row.margin > 0)}>
              {Math.abs(row.margin).toString()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          px: { xs: 0.5, md: undefined },
          justifyContent: { xs: "space-between", md: undefined },
        }}
      >
        <Box sx={SCommentBox}>
          <Box sx={SComment}>
            <Ellipse />
            <Typography sx={SCommentText}>
              {row.comment || "Comment"}
            </Typography>
          </Box>
        </Box>
        <Box sx={SCourceBox}>
          <Box sx={SSourceBoxInner(row.sourceColor)}>
            <row.sourceIcon />
            <Typography sx={SSourceBoxText(row.sourceTextColor)}>
              {row.source}
            </Typography>
          </Box>
        </Box>
        <Box sx={SPaymentMethodBox}>
          <Box sx={SPaymentMethodBoxInner}>
            <row.paymentMethodIcon />
            <Typography sx={SPaymentMethodText}>{row.paymentMethod}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
