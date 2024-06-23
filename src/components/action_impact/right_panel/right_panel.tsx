import { Box, Typography } from "@mui/material";
import React from "react";
import { ChartView } from "../chart_view";
import header from "../../../assets/header.png";
import container from "../../../assets/container.png";

const RightPanel = () => {
  return (
    <Box
      display="flex"
      height="96%"
      flex={1}
      minWidth={0}
      flexDirection="column"
      sx={{
        padding: "20px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb="10px"
      >
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "32px",
              letterSpacing: " -0.015em",
              textAlign: "left",
              color: "black",
            }}
          >
            Impact Analysis
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "20px",
              letterSpacing: " -0.015em",
              textAlign: "left",
              color: "#5C6674",
            }}
          >
            Track, authorize, and analyze all actions
          </Typography>
        </Box>
        {/* <Box
          component="img"
          src={header}
          sx={{
            // height: "54px",
            width: "600px",
          }}
        /> */}
        <Box
          component="img"
          src={container}
          sx={{
            height: "40px",
            width: "600px",
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        minHeight={0}
        sx={{
          overflow: "auto",
          margin: "10px 0px",
          padding: "24px 16px",
          background: "white",
          gap: "24px",
          borderRadius: "8px",
        }}
      >
        <ChartView title="Roas Analysis" />
        <ChartView title="CPR" />
        <ChartView title="CVR" />
      </Box>
    </Box>
  );
};

export default RightPanel;
