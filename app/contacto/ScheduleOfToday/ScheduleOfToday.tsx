import React from "react";
import {
  Calendar,
  convertDateYMDtoDMY,
  getScheduleOfToday,
  getTodayDate,
} from "../contacto.utils";
import Rocket from "@/app/components/Icons/Rocket";
import Warning from "@/app/components/Icons/Warning";

interface IScheduleOfToday {
  selectedDay: string;
  calendar?: Calendar[];
  selectedMonth?: Calendar;
}
const ScheduleOfToday = ({
  calendar,
  selectedDay,
  selectedMonth,
}: IScheduleOfToday) => {
  const { todaySchedule, selectedDaySchedule } = getScheduleOfToday(
    selectedDay,
    selectedMonth,
    calendar ? calendar : undefined
  );
  const today = getTodayDate();

  return (
    <div className="mx-auto sm:px-6 mt-4 lg:max-w-7xl lg:px-8">
      {todaySchedule ? (
        <h3 className="text-sm font-normal leading-7 text-green-500 flex">
          <Rocket />
          Hoy {today}, la clinica está abierta:{" "}
          {todaySchedule}
        </h3>
      ) : (
        <h3 className="text-sm font-normal leading-7 text-red-500 flex">
          <Warning />
          Hoy {today}, la clinica está cerrada
        </h3>
      )}
      {convertDateYMDtoDMY(today) !== selectedDay &&
        (selectedDaySchedule ? (
          <h3 className="text-sm font-normal leading-7 text-green-500 flex">
            <Rocket />
            El día seleccionado {convertDateYMDtoDMY(selectedDay)}, la clinica está abierta:{" "}
            {selectedDaySchedule}
          </h3>
        ) : (
          <h3 className="text-sm font-normal leading-7 text-red-500 flex">
            <Warning />
            El día seleccionado {convertDateYMDtoDMY(selectedDay)}, la clinica está cerrada
          </h3>
        ))}
    </div>
  );
};

export default ScheduleOfToday;
