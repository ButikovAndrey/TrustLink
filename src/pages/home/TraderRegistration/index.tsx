import { Box, Button, Modal, Typography } from "@mui/material";
import { useAppStore } from "@/store";
import { RegistrationField } from "@/pages/home/TraderRegistration/RegistrationField";
import {
  fieldsConfig,
  fullNameConfig,
} from "@/pages/home/TraderRegistration/constants";
import { Ok } from "@/icons";

export const TraderRegistration = () => {
  const open = useAppStore((store) => store.openTR);
  const setClose = useAppStore((store) => store.setCloseTR);

  const value = useAppStore((store) => store.step0value);
  const setValue = useAppStore((store) => store.setStep0value);

  return (
    <Modal open={open} onClose={setClose}>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "95vw",
          maxWidth: 900,
          maxHeight: "95vh",
          bgcolor: "background.paper",
          borderRadius: "40px",
          boxSizing: "border-box",
          boxShadow: 24,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            py: "40px",
            px: {
              xs: 2.5,
              sm: 5,
              md: "60px",
            },
          }}
        >
          <Typography
            component="h3"
            sx={{
              width: "100%",
              fontFamily: '"Manrope", sans-serif',
              fontSize: 25,
              fontWeight: 400,
              color: "#1B2128",
              textAlign: "center",
              m: 0,
              p: 0,
            }}
          >
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
          <Box
            sx={{
              bgcolor: "#FDF0FF",
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              boxSizing: "border-box",
              px: "30px",
              py: "20px",
              mt: "20px",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontFamily: '"Manrope", sans-serif',
                fontSize: 15,
                fontWeight: 400,
                color: "#A808C8",
                mb: "10px",
                p: 0,
              }}
            >
              Are you ready to pass the KYC?
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              {["Yes", "No"].map((name) => (
                <Button
                  key={name}
                  startIcon={
                    name === value ? (
                      <Ok style={{ marginRight: "2px" }} />
                    ) : undefined
                  }
                  color="secondary"
                  variant={name === value ? "outlined" : "contained"}
                  onClick={() => setValue(name)}
                  sx={{
                    textTransform: "none",
                    borderRadius: 30,
                    boxShadow: "none",
                    bgcolor: name === value ? "#FDF0FF" : "white",
                    color: "#A808C8",
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 500,
                    fontSize: 25,
                    width: "100%",
                    height: 60,
                    py: 1,
                    transition: "background-color 0.5s",
                    "&:hover": {
                      boxShadow: "none",
                    },
                  }}
                >
                  {name}
                </Button>
              ))}
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
          <Box sx={{ display: "flex", width: "100%", mt: "20px" }}>
            <Button
              color="secondary"
              variant={"contained"}
              onClick={setClose}
              sx={{
                textTransform: "none",
                borderRadius: 30,
                boxShadow: "none",
                bgcolor: "#F7D0FF",
                color: "#A808C8",
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 500,
                fontSize: 25,
                width: 117,
                height: 60,
                mr: "20px",
                py: 1,
                transition: "background-color 0.5s",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Back
            </Button>
            <Button
              color="secondary"
              variant={"contained"}
              sx={{
                textTransform: "none",
                borderRadius: 30,
                boxShadow: "none",
                bgcolor: "#A808C8",
                color: "white",
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 500,
                fontSize: 25,
                width: "100%",
                height: 60,
                py: 1,
                transition: "background-color 0.5s",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Submit Application
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
