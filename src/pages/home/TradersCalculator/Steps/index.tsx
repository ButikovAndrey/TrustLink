import { StepSwither } from "./StepSwither";
import { Title } from "./Titile";
// import { useAppStore } from "@/store";
import { Box } from "@mui/material";

export const Steps = () => {
  //   const step = useAppStore((store) => store.step);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        mb: "40px",
        gap: { xs: 1.5, sm: "20px" },
        flexWrap: "wrap",
        px: { xs: 0.5, sm: 2 },
        boxSizing: "border-box",
      }}
    >
      <Title />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mb: "40px",
          gap: "20px",
          flexWrap: "wrap",
          px: { xs: 0.5, sm: 2 },
          boxSizing: "border-box",
        }}
      >
        <StepSwither />
      </Box>
    </Box>
  );
};
