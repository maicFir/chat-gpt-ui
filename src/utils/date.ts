import dayjs from "dayjs";
import TimeZone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
dayjs.extend(TimeZone);

// 根据时区转换时间
export const formatTime = (
  date: number,
  formate: string = "MM/DD/YYYY, HH:mm:ss"
) => {
  const utcTime = dayjs(date).tz(getGuess());
  return dayjs(utcTime).format(formate);
};
// 获取时区
export const getGuess = () => {
  return dayjs.tz.guess();
};
