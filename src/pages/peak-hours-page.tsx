import { useState } from "react";

import { WeeklyPeakHoursRangeSelector, type WeeklyPeakHoursValue } from "@/components";

const demoWeek: WeeklyPeakHoursValue = [
  {
    id: "mon",
    label: "Пн",
    dateLabel: "26.05",
    ranges: [
      { start: 10.5, end: 12 },
      { start: 16, end: 17.5 },
    ],
  },
  {
    id: "tue",
    label: "Вт",
    dateLabel: "27.05",
    ranges: [
      { start: 9, end: 11.5 },
      { start: 15.5, end: 17 },
    ],
  },
  {
    id: "wed",
    label: "Ср",
    dateLabel: "28.05",
    ranges: [
      { start: 10, end: 12.5 },
      { start: 16.5, end: 18 },
    ],
  },
  {
    id: "thu",
    label: "Чт",
    dateLabel: "29.05",
    ranges: [
      { start: 9.5, end: 11.5 },
      { start: 15, end: 16.5 },
    ],
  },
  {
    id: "fri",
    label: "Пт",
    dateLabel: "30.05",
    ranges: [
      { start: 10, end: 12 },
      { start: 15.5, end: 17 },
    ],
  },
  {
    id: "sat",
    label: "Сб",
    dateLabel: "31.05",
    ranges: [
      { start: 11, end: 13 },
      { start: 17, end: 18.5 },
    ],
  },
  {
    id: "sun",
    label: "Вс",
    dateLabel: "01.06",
    ranges: [
      { start: 11, end: 13.5 },
      { start: 16.5, end: 18 },
    ],
  },
];

export const PeakHoursPage = () => {
  const [week, setWeek] = useState<WeeklyPeakHoursValue>(demoWeek);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 items-center py-10">
      <WeeklyPeakHoursRangeSelector
        addOnDoubleClick
        addRangeStrategy="largest-gap"
        className="mx-auto"
        onChange={setWeek}
        value={week}
      />
    </div>
  );
};
