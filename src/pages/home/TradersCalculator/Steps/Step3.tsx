import { formatAmount } from "@/helpers/stringFormats";
import { useAppStore } from "@/store";
import { Box, Button, Slider, Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

export const Step3 = () => {
  const value = useAppStore((store) => store.step3value);
  const setValue = useAppStore((store) => store.setStep3value);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };
  const setMax = () => {
    setValue([value[0], 10000]);
  };
  const setMin = () => {
    setValue([1, value[1]]);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: "20px" },
          mb: 0,
        }}
      >
        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 500,
              fontSize: 15,
              borderRadius: 16,
              width: 82,
              height: 36,
            }}
            onClick={setMin}
          >
            {"₽ 1"}
          </Button>
          <Button
            sx={{
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 500,
              fontSize: 15,
              borderRadius: 16,
              width: 82,
              height: 36,
              textWrap: "nowrap",
              px: 0,
            }}
            variant="outlined"
            color="secondary"
            onClick={setMax}
          >
            {"₽ 10 000"}
          </Button>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontWeight: 500,
            fontSize: 15,
            borderRadius: 16,
            width: 82,
            height: 36,
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          onClick={setMin}
        >
          {"₽ 1"}
        </Button>
        <Box
          sx={{
            width: {
              xs: 254,
              sm: 320,
              md: 452,
            },
          }}
        >
          <Slider
            getAriaLabel={() => "Preferred check size"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            step={1}
            max={10000}
            color="secondary"
            sx={{
              "& .MuiSlider-valueLabel": {
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 500,
                bgcolor: "#F7D0FF",
                color: "#A808C8",
                fontSize: 15,
                borderRadius: "4px",
              },
              "& .MuiSlider-thumb": {
                width: 30,
                height: 30,
                border: "2px solid white",
              },
              "& .MuiSlider-rail": {
                height: "15px",
              },
              "& .MuiSlider-track": {
                height: "15px",
                borderRadius: 4,
              },
            }}
          />
        </Box>
        <Button
          sx={{
            fontFamily: '"Manrope", sans-serif',
            fontWeight: 500,
            fontSize: 15,
            borderRadius: 16,
            width: 82,
            height: 36,
            px: 0,
            display: {
              xs: "none",
              sm: "block",
            },
            textWrap: "nowrap",
          }}
          variant="outlined"
          color="secondary"
          onClick={setMax}
        >
          {"₽ 10 000"}
        </Button>
      </Box>
      <Typography
        sx={{
          display: "block",
          width: "100%",
          textAlign: "center",
          fontWeight: 500,
          color: "#A808C8",
          fontSize: 15,
          p: 0,
          m: 0,
        }}
      >{`₽ ${formatAmount(value[0])} - ₽ ${formatAmount(
        value[1]
      )}`}</Typography>
    </>
  );
};
