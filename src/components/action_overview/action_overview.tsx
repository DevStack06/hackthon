import { Box } from "@mui/material";
import action_overview from "../../assets/action_overview.png";
import React from "react";

const ActionOverview = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        component="img"
        src={action_overview}
        alt="overview"
        sx={{
          height: "100%",
          width: "100%",
        }}
      ></Box>
    </Box>
  );
};

export default ActionOverview;
