import { formatAmount } from "@/helpers/stringFormats";
import {
  SS3BigButton,
  SS3Container,
  SS3InnerBox,
  SS3RangeInfo,
  SS3Slider,
  SS3SliderBox,
  SS3SmallButton,
} from "./styles";
import { useAppStore } from "@/store";
import { Box, Button, Slider, Typography } from "@mui/material";

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
      <Box sx={SS3Container}>
        <Box sx={SS3InnerBox}>
          <Button
            variant="outlined"
            color="secondary"
            sx={SS3BigButton}
            onClick={setMin}
          >
            {"₽ 1"}
          </Button>
          <Button
            sx={SS3BigButton}
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
          sx={SS3SmallButton}
          onClick={setMin}
        >
          {"₽ 1"}
        </Button>
        <Box sx={SS3SliderBox}>
          <Slider
            getAriaLabel={() => "Preferred check size"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            step={1}
            max={10000}
            color="secondary"
            sx={SS3Slider}
          />
        </Box>
        <Button
          sx={SS3SmallButton}
          variant="outlined"
          color="secondary"
          onClick={setMax}
        >
          {"₽ 10 000"}
        </Button>
      </Box>
      <Typography sx={SS3RangeInfo}>{`₽ ${formatAmount(
        value[0]
      )} - ₽ ${formatAmount(value[1])}`}</Typography>
    </>
  );
};
