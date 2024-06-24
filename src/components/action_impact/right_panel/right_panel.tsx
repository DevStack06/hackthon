import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { ChartView } from "../chart_view";
import header from "../../../assets/header.png";
import container from "../../../assets/container.png";
import calendar from "../../../assets/Calendar.svg";
import { defaultMetricsArray } from "../action_impact.const";
import "./ReportmanagerTable.css";

const RightPanel = () => {
  const [metricsList, setMetricsList] = useState(defaultMetricsArray);
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
          margin: "10px 0px",
          padding: "24px 16px",
          background: "white",
          borderRadius: "8px",
        }}
      >
        <Box
          display="flex"
          alignSelf="flex-end"
          mb="10px"
          sx={{
            padding: "6px 12px 6px 12px",
            borderRadius: "6px",
            border: "1.5px solid #E0E3E5",
          }}
          gap="8px"
        >
          <Box component="img" src={calendar} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: "22px",
              letterSpacing: " -0.015em",
              textAlign: "left",
              color: "#394455",
            }}
          >
            01 Jun 2024 - 21 Jun 2024
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          minHeight={0}
          sx={{
            overflow: "auto",
            gap: "24px",
          }}
        >
          {metricsList.map((item) => (
            <ChartView
              title={item.name}
              key={item.id}
              metricType={item.metricType}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RightPanel;
