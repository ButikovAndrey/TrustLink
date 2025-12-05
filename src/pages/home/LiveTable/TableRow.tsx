import { ArrowDown, ArrowUp, Ellipse } from "@/icons";
import { ITableCotent } from "@/pages/home/LiveTable/constants";
import { Box, Typography } from "@mui/material";

type PropsType = {
  row: ITableCotent;
};

export const TableRow = ({ row }: PropsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: 45,
        border: "1px solid #E4E4E4",
        borderRadius: "4.2px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: 200,
          height: "100%",
          justifyContent: "flex-start",
          px: 0.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 165,
            minWidth: 165,
            gap: 1,
            textWrap: "nowrap",
            bgcolor: "#F2F8FF",
            borderRadius: 40,
            height: 32,
            px: 1,
          }}
        >
          <row.personIcon
            style={{
              width: "21px",
              height: "21px",
              borderRadius: "50%",
              textWrap: "nowrap",
              marginLeft: "3px",
            }}
          />
          <Typography
            sx={{
              color: "#727272",
              fontFamily: '"Inter", sans-serif',
              fontSize: 15,
              fontWeight: 300,
            }}
          >
            {row.personName}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
          textWrap: "nowrap",
          width: 155,
          minWidth: 155,
        }}
      >
        <Typography
          sx={{
            color: "#727272",
            fontFamily: '"Inter", sans-serif',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {row.amount}
        </Typography>
        <Box
          sx={{
            display: "flex",
            height: 26.5,
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            borderRadius: "40px",
            bgcolor: row.margin > 0 ? "#F0FEED" : "#FFEBE8",
            px: 1,
            textWrap: "nowrap",
          }}
        >
          {row.margin > 0 ? <ArrowUp /> : <ArrowDown />}
          <Typography
            sx={{
              color: row.margin > 0 ? "#259800" : "#FF1818",
              pr: 1,
              fontFamily: '"Inter", sans-serif',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {Math.abs(row.margin).toString()}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: 155,
          minWidth: 155,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: 27,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            borderRadius: "40px",
            bgcolor: "#F8F8F8",
            px: 1,
            textWrap: "nowrap",
          }}
        >
          <Ellipse />
          <Typography
            sx={{
              color: "#5A5A5A",
              fontFamily: '"Inter", sans-serif',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {row.comment || "Comment"}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: 135,
          minWidth: 135,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: 100,
            minWidth: 100,
            height: 27,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            borderRadius: "40px",
            bgcolor: row.sourceColor,
            px: 1,
          }}
        >
          <row.sourceIcon />
          <Typography
            sx={{
              color: row.sourceTextColor,
              fontFamily: '"Inter", sans-serif',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {row.source}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: 145,
          minWidth: 145,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: 100,
            minWidth: 100,
            height: 27,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            borderRadius: "40px",
            bgcolor: "#F0FEED",
            px: 1,
          }}
        >
          <row.paymentMethodIcon />
          <Typography
            sx={{
              color: "#259800",
              fontFamily: '"Inter", sans-serif',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {row.paymentMethod}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
