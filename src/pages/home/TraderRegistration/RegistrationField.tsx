import { IFieldConfig } from "./constants";
import {
  SFRSelect,
  SRFContainer,
  SRFForm,
  SRFInnerBox,
  SRFPlaceholder,
  SRFSelected,
  SRFTextField,
  SRFTitle,
} from "./styles";
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
    <Box sx={SRFContainer}>
      <Typography sx={SRFTitle}>{title}</Typography>
      <Box sx={SRFInnerBox}>
        <IconElem />
        <FormControl sx={SRFForm} size="small">
          {typeof values === "string" ? (
            <TextField
              placeholder={placeholder}
              variant="outlined"
              value={value}
              onChange={handleChange}
              sx={SRFTextField}
            />
          ) : (
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              IconComponent={() => null}
              renderValue={(selected) => {
                if (selected) {
                  return <Typography sx={SRFSelected}>{selected}</Typography>;
                }
                return (
                  <Typography sx={SRFPlaceholder}>{placeholder}</Typography>
                );
              }}
              sx={SFRSelect}
            >
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
