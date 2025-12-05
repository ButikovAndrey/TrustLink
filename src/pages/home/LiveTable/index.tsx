import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { tableContent } from "./constants";
import { TableRow } from "./TableRow";
import { Live } from "@/icons";

const MAX_VISIBLE = 7;
const ROW_HEIGHT = 50;
const INTERVAL = 7000;
const ANIM_DURATION = 500;
const HIGHLIGHT_DURATION = 750;

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
      <Box
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          mb: "50px",
        }}
      >
        <Live />
        <Typography
          sx={{
            fontWeight: 400,
            fontFamily: '"Manrope", sans-serif',
            fontSize: {
              xs: 28,
              sm: 32,
              md: 40,
            },
          }}
          component="h3"
        >
          Live Activity
        </Typography>
      </Box>
      <Box
        sx={{
          height: `${MAX_VISIBLE * ROW_HEIGHT}px`,
          overflow: "hidden",
          width: "100%",
          maxWidth: 790,
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            transform: `translateY(${shift}px)`,
            transition: transitionEnabled
              ? `transform ${ANIM_DURATION}ms ease`
              : "none",
            overflow: "auto",
          }}
        >
          {rows.map((row, i) => (
            <Box
              key={row.personName}
              sx={{
                height: `${ROW_HEIGHT}px`,
                bgcolor: i === highlightIndex ? "#F0FEED" : "transparent",
                opacity: i === highlightIndex ? 0.75 : 1,
                transition: `${HIGHLIGHT_DURATION}ms`,
              }}
            >
              <TableRow row={row} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
