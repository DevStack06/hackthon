import moment from "moment";

export const createDateLookupArray = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}): string[] => {
  const dateLookupArray: string[] = [];
  for (
    let currentDate = new Date(startDate);
    currentDate <= new Date(endDate);
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    dateLookupArray.push(moment(currentDate.toString()).format("MMM DD"));
  }

  return dateLookupArray;
};

export const findColor = (
  metricType: "positive" | "negative" | "NEUTRAL" | undefined,
  incrementValue: number
): string => {
  console.log("metricType", metricType);

  if (
    incrementValue === 0 ||
    !metricType ||
    metricType.toLocaleLowerCase() === "neutral"
  ) {
    return "blue";
  } else {
    return xNorGate(
      metricType.toLocaleLowerCase() === "positive",
      incrementValue > 0
    )
      ? "#44BB79"
      : "#E91B16";
  }
};

export function xNorGate(input1: boolean, input2: boolean) {
  return (!input1 && !input2) || (input1 && input2);
}

export const findSVGColorCss = (
  metricType: "positive" | "negative" | "NEUTRAL" | undefined,
  incrementValue: number
) => {
  if (
    incrementValue === 0 ||
    !metricType ||
    metricType.toLocaleLowerCase() === "neutral"
  ) {
    return "class-svg-blue";
  } else {
    return xNorGate(
      metricType.toLocaleLowerCase() === "positive",
      incrementValue > 0
    )
      ? "class-svg-green"
      : "class-svg-red";
  }
};
