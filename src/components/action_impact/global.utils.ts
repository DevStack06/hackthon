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
