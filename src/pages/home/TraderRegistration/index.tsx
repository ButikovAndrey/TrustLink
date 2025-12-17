import { Box, Modal, Typography } from "@mui/material";
import { useAppStore } from "@/store";
import { RegistrationField } from "@/pages/home/TraderRegistration/RegistrationField";
import { fieldsConfig } from "@/pages/home/TraderRegistration/constants";

export const TraderRegistration = () => {
  const open = useAppStore((store) => store.openTR);
  const setClose = useAppStore((store) => store.setCloseTR);

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
          {fieldsConfig.map(({ title, IconElem, placeholder, values }) => (
            <RegistrationField
              title={title}
              IconElem={IconElem}
              values={values}
              placeholder={placeholder}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};
