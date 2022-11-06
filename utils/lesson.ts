type ConvetDayCodeString =
  | "شنبه"
  | "یکشنبه"
  | "دوشنبه"
  | "سه شنبه"
  | "چهارشنبه"
  | "پنجشنبه"
  | "جمعه";

type ConvertDayCodeNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const convetDayCode = (
  day: ConvertDayCodeNumber | ConvetDayCodeString
) => {
  const weekDay = {
    0: "شنبه",
    1: "یکشنبه",
    2: "دوشنبه",
    3: "سه شنبه",
    4: "چهارشنبه",
    5: "پنجشنبه",
    6: "جمعه",
  };
  if (typeof day === "number") return weekDay[day];
  else if (typeof day === "string") return Object.values(weekDay).indexOf(day);
};
