import { SSContainer, SSInnerBox } from "./styles";
import { StepSwither } from "./StepSwither";
import { Title } from "./Titile";
import { Box } from "@mui/material";

export const Steps = () => {
  return (
    <Box sx={SSContainer}>
      <Title />
      <Box sx={SSInnerBox}>
        <StepSwither />
      </Box>
    </Box>
  );
};
