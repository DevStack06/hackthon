import React, { Fragment, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import * as faker from "@faker-js/faker";
import { Box, Typography } from "@mui/material";
import ImpactDrawer from "./drawer";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Dataset 1",
      borderColor: "#A149EF",
      borderWidth: 2,
      fill: false,
      data: labels.map(() =>
        faker.faker.datatype.number({ min: -1000, max: 1000 })
      ),
    },
    {
      type: "bar" as const,
      label: "Dataset 2",
      backgroundColor: "#FCE5F2",
      data: labels.map(() =>
        faker.faker.datatype.number({ min: -1000, max: 1000 })
      ),
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

export function ChartView({ title }: { title: string }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Fragment>
      <Box display="flex" flexDirection="column" height="500px">
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "32px",
            letterSpacing: "-0.015em",
            color: "black",
          }}
          onClick={() => setOpenDrawer(true)}
          mb="16px"
        >
          {title}
        </Typography>
        <Chart
          type="bar"
          data={data}
          width="1200px"
          height="350px"
          options={{
            plugins: {
              legend: {
                display: false,
              },
              // tooltip:
            },
          }}
          style={{
            alignSelf: "center",
          }}
        />
      </Box>
      <ImpactDrawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      />
    </Fragment>
  );
}
