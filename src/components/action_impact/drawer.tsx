import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";

import Close from "../../assets/close.svg";
import MainItem from "./main_item";
import { useNavigate } from "react-router-dom";

const ImpactDrawer = ({
  selectedBarItem,
  open,
  onClose,
}: {
  selectedBarItem: any;
  open: boolean;
  onClose: any;
}) => {
  const navigate = useNavigate();
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
        alignItems="center"
        justifyContent="space-between"
        mb="30px"
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: "0.01em",
            color: "#000000",
          }}
        >
          Impacted Actions
        </Typography>
        <IconButton onClick={onClose}>
          <Box component="img" src={Close} />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" flex={1} minHeight={0}>
        <MainItem selectedBarItem={selectedBarItem} />
      </Box>

      <Box display="flex" justifyContent="flex-end" mb="36px">
        <Button
          sx={{
            padding: "14px 30px",
            gap: "10px",
            borderRadius: "8px",
            background: "#0869FB",
            textTransform: "none",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "22px",
          }}
          variant="contained"
          onClick={() => {
            navigate("/action-overview");
          }}
        >
          Go to Action Overview
        </Button>
      </Box>
    </Drawer>
  );
};

export default ImpactDrawer;
