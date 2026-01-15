import { ArrowNE, ReceiveBox } from "@/icons";
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
  SCommentContainer,
  SMiddleBox,
  SRowAmountInner,
  SCommentOuter,
} from "./styles";
import { Box, Typography } from "@mui/material";
import { formatAmount, hideLastSymbols } from "@/helpers/stringFormats";

type PropsType = {
  row: ITableCotent;
};

export const TableRow = ({ row }: PropsType) => {
  return (
    <Box sx={SRowBoxOuter}>
      <Box sx={SRowBoxInner}>
        <Box sx={SPersonBox}>
          <img src={row.personIcon} alt="" loading="lazy" style={SPersonIcon} />
          <Typography sx={SPersonName}>
            {hideLastSymbols(row.personName)}
          </Typography>
        </Box>
      </Box>
      <Box sx={SRowBoxInner_1}>
        <Box sx={SRowAmountBox}>
          <Box sx={SMiddleBox}>
            <Box sx={SRowAmountInner}>
              <ReceiveBox style={{ minWidth: "15px", minHeight: "15px" }} />
              <Typography sx={SRowAmount}>
                {formatAmount(row.amount)}
              </Typography>
            </Box>
          </Box>
          <Box sx={SCommentOuter}>
            <Box sx={SComment}>
              <ArrowNE />
              <Typography sx={SCommentText}>
                {row.comment || "Comment"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={SCommentBox}>
          <Box sx={SArrowBox(row.margin > 0)}>
            <Typography sx={SArrowText(row.margin > 0)}>
              {Math.abs(row.margin).toString()}%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={SCommentContainer}>
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
