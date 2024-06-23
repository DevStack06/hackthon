import React, { Fragment, useMemo, useRef, useState } from "react";
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
import { Chart, getElementAtEvent } from "react-chartjs-2";
import * as faker from "@faker-js/faker";
import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ImpactDrawer from "./drawer";
import PinkDot from "../../assets/pinkdot.svg";
import ArrowDown from "../../assets/Down.svg";
import { defaultMetricsArray } from "./action_impact.const";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import dataJson from "./data.json";
import { createDateLookupArray } from "./global.utils";
import moment from "moment";

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

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// const data = {
//   labels,
//   datasets: [
//     {
//       type: "line" as const,
//       label: "CPC",
//       borderColor: "#A149EF",
//       borderWidth: 2,
//       fill: false,
//       data: labels.map(() =>
//         faker.faker.datatype.number({ min: -1000, max: 1000 })
//       ),
//     },
//     {
//       type: "bar" as const,
//       label: "Percentage changes",
//       backgroundColor: "#FCE5F2",
//       data: labels.map(() =>
//         faker.faker.datatype.number({ min: -1000, max: 1000 })
//       ),
//       borderColor: "white",
//       borderWidth: 2,
//     },
//   ],
// };

export function ChartView({ title }: { title: string }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedBarItem, setSelectedBarItem] = useState();
  const chartRef = useRef();

  const { data: metrcData, isFetching } = useQuery({
    queryKey: ["metric data", title],

    queryFn: () =>
      axios
        .post(
          "https://hkgjawuuy9.execute-api.ap-south-1.amazonaws.com/development/",
          {
            aiGroup: "abc",
            metricNames: [title],
            optimizerId: "opt1",
            platform: "facebook",
            dateRange: {
              startDate: "2024-06-01",
              endDate: "2024-06-21",
            },
          }
        )
        .then((res) => {
          return res.data.data;
        })
        .catch((err) => {
          return dataJson.data;
        }),
  });

  const labels = useMemo(
    () =>
      createDateLookupArray({
        startDate: "2024-06-01",
        endDate: "2024-06-21",
      }),
    []
  );

  const data = useMemo(() => {
    const ok = labels.map((i, index) => {
      return (
        metrcData?.metric_agg_values?.[title]?.[index]?.metric_value_agg || 0
      );
    });

    return {
      labels,
      datasets: [
        {
          type: "line" as const,
          label: "CPC",
          borderColor: "#A149EF",
          borderWidth: 2,
          fill: false,
          data: ok,
        },
        {
          type: "bar" as const,
          label: "Percentage changes",
          backgroundColor: "#FCE5F2",
          data: labels.map((item, index: number) => {
            const item3 = metrcData?.impact_actions?.find(
              (item2: any) => moment(item2?.date).format("MMM DD") === item
            );
            if (item3) {
              return item3?.percentage_change;
            }
            return 0;
          }),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    };
  }, [metrcData]);

  return (
    <Fragment>
      <Box display="flex" flexDirection="column" height="500px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
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
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            IconComponent={() => {
              return (
                <Box
                  component="img"
                  mt="-5px"
                  ml="-15px"
                  sx={{}}
                  src={ArrowDown}
                />
              );
            }}
            value={title}
            // onChange={handleChange}
            variant="standard"
            label="Age"
            sx={{
              height: "30px",
            }}
            disableUnderline
            inputProps={{
              style: {
                textUnderlineOffset: "none",
              },
            }}
            renderValue={(item: any) => (
              <Box display="flex" gap="5px">
                <Box component="img" src={PinkDot} />
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    letterSpacing: "-0.015em",
                    color: "#5C6674",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            )}
            // prefix={<Box />}
          >
            {defaultMetricsArray.map((item) => (
              <MenuItem
                value={item.id}
                sx={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22px",
                  letterSpacing: "-0.015em",
                  color: "#5C6674",
                }}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        {isFetching ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="1200px"
            height="350px"
          >
            <CircularProgress />
          </Box>
        ) : (
          <Chart
            type="bar"
            data={data}
            width="1200px"
            height="350px"
            ref={chartRef}
            onClick={(event: any) => {
              const eventVal = getElementAtEvent(chartRef?.current, event);
              if (eventVal?.[0]?.datasetIndex === 1) {
                setOpenDrawer(true);
                const item3 = metrcData?.impact_actions?.find(
                  (item2: any) =>
                    moment(item2?.date).format("MMM DD") ===
                    labels[eventVal?.[0]?.index]
                );
                setSelectedBarItem(item3);
              }
            }}
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
        )}
      </Box>
      <ImpactDrawer
        open={openDrawer}
        selectedBarItem={selectedBarItem}
        onClose={() => {
          setOpenDrawer(false);
          setSelectedBarItem(undefined);
        }}
      />
    </Fragment>
  );
}
