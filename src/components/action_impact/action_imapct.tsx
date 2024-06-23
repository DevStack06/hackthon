import React from "react";
import { Box } from "@mui/material";
import left_panel from "../../assets/left.png";
import RightPanel from "./right_panel/right_panel";

const ActionImpact = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: "100vh",
        width: "100vw",
        background: "#f6f7f8",
      }}
    >
      <Box
        display="flex"
        flex={1}
        minHeight={0}
        sx={{
          margin: "8px 24px",
        }}
      >
        <Box
          component="img"
          src={left_panel}
          alt="left"
          sx={{
            height: "100%",
          }}
        />
        <RightPanel />
      </Box>
    </Box>
  );
};

export default ActionImpact;
