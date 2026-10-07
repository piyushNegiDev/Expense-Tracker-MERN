import dayjs from "dayjs";

export const getMonthlyTotal = (appData, type, targetDate) => {
  return appData
    .filter(
      (item) =>
        item.type === type && dayjs(item.date).isSame(targetDate, "month"),
    )
    .reduce((acc, item) => acc + item.amount, 0);
};
