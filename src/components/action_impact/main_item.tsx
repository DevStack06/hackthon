import { Box, Typography } from "@mui/material";
import React from "react";
import ActionItem from "./action_item";
import Impact from "../../assets/impact.svg";
import { ReactComponent as UpArrow } from "../../assets/up_arrow_green.svg";
import { ReactComponent as DownArrow } from "../../assets/down_arrow_red.svg";
import { findColor, findSVGColorCss } from "./global.utils";

const MainItem = ({
  selectedBarItem,
  metricType,
}: {
  selectedBarItem: any;
  metricType: string;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        border: "1px solid #ECEEF1",
        padding: "24px",
        borderRadius: "8px",
        gap: "24px",
      }}
    >
      <Box
        display="flex"
        sx={{
          gap: "24px",
        }}
        alignItems="flex-start"
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "20px",
            letterSpacing: "0.01em",
            color: "#5C6674",
          }}
          pr="93px"
        >
          Adset
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "20px",
              letterSpacing: "0.01em",
            }}
          >
            {selectedBarItem?.asset_id}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.01em",
              color: "#5C6674",
            }}
          >
            23852554920970413
          </Typography>
        </Box>
        {selectedBarItem?.asset_id !== "All" && (
          <Box component="img" src={Impact} />
        )}
      </Box>
      <ActionItem
        title="Impacted Action"
        value={selectedBarItem?.["Impacted Action"]}
        gap="55px"
        percentage_change={
          <Box display="flex" alignItems="center" pl="10px">
            <Typography
              color={findColor(metricType, selectedBarItem?.percentage_change)}
              sx={{
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              {Math.abs(selectedBarItem?.percentage_change) + "%"}
            </Typography>
            {selectedBarItem?.percentage_change > 0 ? (
              <UpArrow
                className={findSVGColorCss(
                  metricType,
                  selectedBarItem?.percentage_change
                )}
              />
            ) : (
              <DownArrow
                className={findSVGColorCss(
                  metricType,
                  selectedBarItem?.percentage_change
                )}
              />
            )}
          </Box>

          //   <Typography
          //     sx={{
          //       fontFamily: "Inter",
          //       fontSize: "12px",
          //       fontWeight: 500,
          //       lineHeight: "20px",
          //       letterSpacing: "0.01em",
          //     }}
          //   >
          //     {selectedBarItem?.percentage_change}
          //   </Typography>
        }
      />
      <ActionItem
        title="Recommended Action"
        value={selectedBarItem?.["Recommended Action"]}
      />
    </Box>
  );
};

export default MainItem;
