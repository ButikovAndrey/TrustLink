import { Ok } from "@/icons";
import { SS2Button, SS2ButtonName, SS2Icon, SS3ButtonNameBox } from "./styles";
import { useAppStore } from "@/store";
import { Box, Button, Typography } from "@mui/material";
import { getSourcesByCurrency } from "./helpers";

export const Step2 = () => {
  const currency = useAppStore((store) => store.step0value);
  const value = useAppStore((store) => store.step2value);
  const setValue = useAppStore((store) => store.setStep2value);

  return (
    <>
      {getSourcesByCurrency(currency!).map(({ name, color, bgcolor, Icon }) => {
        const isSelected = value.includes(name);
        return (
          <Button
            key={name}
            color="secondary"
            variant={isSelected ? "outlined" : "contained"}
            onClick={() => setValue(name)}
            startIcon={
              isSelected ? (
                <Ok style={{ marginRight: "2px" }} />
              ) : (
                <Icon style={SS2Icon(name === "SBP Counterparty")} />
              )
            }
            sx={SS2Button({ isSelected, bgcolor })}
          >
            <Box sx={SS3ButtonNameBox}>
              {name.split(" ").map((title, index) => (
                <Typography
                  component="span"
                  sx={SS2ButtonName({
                    fontSize: index ? 10 : 25,
                    color,
                    isSelected,
                  })}
                >
                  {title}
                </Typography>
              ))}
            </Box>
          </Button>
        );
      })}
    </>
  );
};
