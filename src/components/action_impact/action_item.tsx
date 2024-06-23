import { Box, Typography } from "@mui/material";
import React from "react";

const ActionItem = ({ title, value, percentage_change, gap = "24px" }) => {
  if (value === "NA") {
    return <></>;
  }
  return (
    <Box display="flex" gap={gap} alignItems="center">
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "20px",
          letterSpacing: "0.01em",
          color: "#5C6674",
        }}
      >
        {title}
      </Typography>

      <Box display="flex" alignItems="center">
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "0.01em",
          }}
        >
          {value}:
        </Typography>
        {percentage_change}
      </Box>
    </Box>
  );
};

export default ActionItem;
