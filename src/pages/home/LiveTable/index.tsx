import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  ANIM_DURATION,
  HIGHLIGHT_DURATION,
  INTERVAL,
  MAX_VISIBLE,
  ROW_HEIGHT,
  tableContent,
} from "./constants";
import { TableRow } from "./TableRow";
import { Live } from "@/icons";
import {
  SLiveTableBox,
  SLiveTableContainer,
  SRowBox,
  SRowContainer,
  STitle,
} from "./styles";

export const LiveTable = () => {
  const [index, setIndex] = useState(0);
  const [rows, setRows] = useState(tableContent.slice(0, MAX_VISIBLE));
  const [shift, setShift] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % tableContent.length;
      const nextRow = tableContent[(index + MAX_VISIBLE) % tableContent.length];

      // Добавляем новую строку наверх
      setRows((prev) => [nextRow, ...prev]);

      // Поднимаем контейнер без transition
      setTransitionEnabled(false);
      setShift(-ROW_HEIGHT);

      // В следующем тикe включаем transition и возвращаем transform в 0
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setShift(0);

          // Моргание фона верхнего элемента
          setHighlightIndex(0);
          setTimeout(() => setHighlightIndex(null), HIGHLIGHT_DURATION);
        });
      });

      // Через анимацию удаляем последний элемент
      setTimeout(() => {
        setRows((prev) => prev.slice(0, MAX_VISIBLE));
        setIndex(nextIndex);
      }, ANIM_DURATION);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Box sx={SLiveTableContainer}>
        <Live />
        <Typography sx={STitle} component="h3">
          Live Activity
        </Typography>
      </Box>
      <Box sx={SLiveTableBox}>
        <Box sx={SRowContainer({ shift, transitionEnabled })}>
          {rows.map((row, i) => (
            <Box key={row.personName} sx={SRowBox(i === highlightIndex)}>
              <TableRow row={row} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
