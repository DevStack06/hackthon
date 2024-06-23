import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

const ImpactDrawer = ({ open, onClose }: { open: boolean; onClose: any }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      sx={{}}
      PaperProps={{
        sx: {
          width: "678px",
          height: "100vh",
          padding: "16px",
        },
      }}
      hideBackdrop
      onClose={onClose}
    >
      <Box
        display="flex"
        sx={{
          border: "1px solid #ECEEF1",
          padding: "24px",
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
          }}
        >
          Adset
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "20px",
              letterSpacing: "0.01em",
            }}
          >
            Runningshoes-interest_US_20-40_Regular_runner_ad_TAI_Affinity
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
      </Box>
    </Drawer>
  );
};

export default ImpactDrawer;
