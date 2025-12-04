import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { tableContent } from "./constants";
import { TableRow } from "./TableRow";

const MAX_VISIBLE = 7;
const ROW_HEIGHT = 50;
const INTERVAL = 8000;

export const LiveTable = () => {
  const [index, setIndex] = useState(0);
  const [visibleRows, setVisibleRows] = useState(
    tableContent.slice(0, MAX_VISIBLE)
  );

  const [animating, setAnimating] = useState(false);
  const [newRow, setNewRow] = useState(tableContent[MAX_VISIBLE]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % tableContent.length;
      const nextRow = tableContent[(index + MAX_VISIBLE) % tableContent.length];

      setNewRow(nextRow);
      setAnimating(true);

      setTimeout(() => {
        // обновляем массив после анимации
        setVisibleRows((prev) => {
          const copy = [...prev];
          copy.pop(); // убираем последний
          copy.unshift(nextRow); // добавляем новый сверху
          return copy;
        });
        setIndex(nextIndex);
        setAnimating(false);
      }, 500); // совпадает с transition
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box
      sx={{
        height: `${MAX_VISIBLE * ROW_HEIGHT}px`,
        overflow: "hidden",
        width: "100%",
        maxWidth: 790,
        position: "relative",
        mb: "15px",
      }}
    >
      {animating && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: `${ROW_HEIGHT}px`,
            transform: "translateY(-50px)",
            opacity: 0,
            animation: "slideDown 0.5s forwards ease",
            zIndex: 2,
          }}
        >
          <TableRow row={newRow} />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {visibleRows.map((row, idx) => (
          <Box
            key={row.personName}
            sx={{
              height: `${ROW_HEIGHT}px`,
              transition: "opacity 0.5s ease",
              transform: animating
                ? `translateY(${ROW_HEIGHT}px)`
                : "translateY(0)",
              opacity: animating && idx === visibleRows.length - 1 ? 0 : 1,
            }}
          >
            <TableRow row={row} />
          </Box>
        ))}
      </Box>

      {/* Анимация CSS */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </Box>
  );
};
