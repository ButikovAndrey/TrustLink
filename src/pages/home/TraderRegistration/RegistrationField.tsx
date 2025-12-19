import { IFieldConfig } from "@/pages/home/TraderRegistration/constants";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export const RegistrationField = ({
  title,
  IconElem,
  values,
  placeholder,
  strFormatter,
}: IFieldConfig) => {
  const [value, setValue] = useState("");

  const handleChange = (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(
      strFormatter ? strFormatter(event.target.value) : event.target.value
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 105,
        bgcolor: "#FDF0FF",
        borderRadius: "40px",
        boxSizing: "border-box",
        py: "20px",
        px: "30px",
        mt: "20px",
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
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <IconElem />
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
          {typeof values === "string" ? (
            <TextField
              id="outlined-basic"
              placeholder={placeholder}
              variant="outlined"
              value={value}
              onChange={handleChange}
              sx={{
                p: 0,
                m: 0,
                "& .MuiOutlinedInput-input": {
                  px: 0,
                  py: 1,
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: 25,
                  // fontWeight: 500,
                  color: "#440A8F",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& input::placeholder": {
                  fontFamily: '"Manrope", sans-serif',
                  fontSize: { xs: 20, sm: 22, md: 25 },
                  fontWeight: 500,
                  color: "#F7D0FF",
                  opacity: 1,
                },
                "& input:-webkit-autofill": {
                  WebkitTextFillColor: "#440A8F",
                  WebkitBoxShadow: "none",
                  bgcolor: "#FDF0FF",
                  transition: "background-color 9999s ease-in-out 0s",
                },
              }}
            />
          ) : (
            <Select
              value={value}
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
                        fontWeight: 400,
                        color: "#440A8F",
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
                    {placeholder}
                  </Typography>
                );
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSelect-select": { paddingLeft: 0 },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {values.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </Box>
    </Box>
  );
};
