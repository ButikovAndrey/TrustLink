import { Box, Button, Modal, Typography } from "@mui/material";
import { fieldsConfig, fullNameConfig } from "./constants";
import { RegistrationField } from "./RegistrationField";
import {
  SBackButton,
  SBottobButtonsBox,
  SButton,
  SKYCBox,
  SKYCButtonsBox,
  SKYCTitle,
  SModalBoxInner,
  SModalContainer,
  SOKMark,
  SSubmitButton,
  STitle,
} from "./styles";
import { useAppStore } from "@/store";
import { Ok } from "@/icons";

export const TraderRegistration = () => {
  const open = useAppStore((store) => store.openTR);
  const setClose = useAppStore((store) => store.setCloseTR);

  const value = useAppStore((store) => store.step0value);
  const setValue = useAppStore((store) => store.setStep0value);

  return (
    <Modal open={open} onClose={setClose}>
      <Box sx={SModalContainer}>
        <Box sx={SModalBoxInner}>
          <Typography component="h3" sx={STitle}>
            Trader Registration
          </Typography>
          {fieldsConfig.map(
            ({ title, IconElem, placeholder, values, strFormatter }) => (
              <RegistrationField
                key={title}
                title={title}
                IconElem={IconElem}
                values={values}
                placeholder={placeholder}
                strFormatter={strFormatter}
              />
            )
          )}
          <Box sx={SKYCBox}>
            <Typography sx={SKYCTitle}>
              Are you ready to pass the KYC?
            </Typography>
            <Box sx={SKYCButtonsBox}>
              {["Yes", "No"].map((name) => {
                const isSelected = name === value;
                return (
                  <Button
                    key={name}
                    startIcon={isSelected && <Ok style={SOKMark} />}
                    color="secondary"
                    variant={isSelected ? "outlined" : "contained"}
                    onClick={() => setValue(name)}
                    sx={SButton(isSelected)}
                  >
                    {name}
                  </Button>
                );
              })}
            </Box>
          </Box>
          {fullNameConfig.map(
            ({ title, IconElem, placeholder, values, strFormatter }) => (
              <RegistrationField
                key={title}
                title={title}
                IconElem={IconElem}
                values={values}
                placeholder={placeholder}
                strFormatter={strFormatter}
              />
            )
          )}
          <Box sx={SBottobButtonsBox}>
            <Button
              color="secondary"
              variant={"contained"}
              onClick={setClose}
              sx={SBackButton}
            >
              Back
            </Button>
            <Button color="secondary" variant={"contained"} sx={SSubmitButton}>
              Submit Application
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
