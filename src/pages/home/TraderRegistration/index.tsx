import {
  Box,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useAppStore } from "@/store";
import { SxProps } from "@mui/material";
import { Timer } from "@/icons";
import { useState } from "react";

const style: SxProps = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 900,
  bgcolor: "background.paper",
  borderRadius: "40px",
  boxSizing: "border-box",
  boxShadow: 24,
};

export const TraderRegistration = () => {
  const open = useAppStore((store) => store.openTR);
  const setClose = useAppStore((store) => store.setCloseTR);

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={setClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            py: "40px",
            px: {
              xs: 3,
              sm: 5,
              md: "60px",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 105,
              bgcolor: "#FDF0FF",
              borderRadius: "40px",
              boxSizing: "border-box",
              py: "20px",
              px: "30px",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontFamily: '"Manrope", sans-serif',
                fontSize: 15,
                fontWeight: 500,
                color: "#A808C8",
              }}
            >
              Experience in processing
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Timer />
              <FormControl
                sx={{
                  p: 0,
                  m: 0,
                  ml: { xs: 1.5, sm: 2, md: "18px" },
                  flex: 1,
                  width: "100%",
                }}
                size="small"
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  IconComponent={() => null}
                  renderValue={(selected) => {
                    if (selected) {
                      return (
                        <Typography
                          sx={{
                            fontFamily: '"Manrope", sans-serif',
                            fontSize: 25,
                            fontWeight: 500,
                            color: "#A808C8",
                          }}
                        >
                          {selected}
                        </Typography>
                      );
                    }
                    return (
                      <Typography
                        sx={{
                          fontFamily: '"Manrope", sans-serif',
                          fontSize: { xs: 20, sm: 22, md: 25 },
                          fontWeight: 500,
                          color: "#F7D0FF",
                        }}
                      >
                        1 year, 3-5 years, 5+ years
                      </Typography>
                    );
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiSelect-select": { paddingLeft: 0 }, // чтобы текст был на одной линии
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
