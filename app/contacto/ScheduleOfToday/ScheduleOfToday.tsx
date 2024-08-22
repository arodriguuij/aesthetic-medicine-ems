import React from "react";
import { getScheduleOfToday } from "../contacto.utils";
import Rocket from "@/app/components/Icons/Rocket";
import Warning from "@/app/components/Icons/Warning";

const ScheduleOfToday = () => {
  const schedule = getScheduleOfToday();
  return (
    <div className="mx-auto sm:px-6 mt-4 lg:max-w-7xl lg:px-8">
      {schedule ? (
        <h3 className="text-sm font-normal leading-7 text-green-500 flex">
          <Rocket />
          Hoy, la clinica está abierta: {schedule}
        </h3>
      ) : (
        <h3 className="text-sm font-normal leading-7 text-red-500 flex">
          <Warning />
          Hoy, la clinica está cerrada
        </h3>
      )}
    </div>
  );
};

export default ScheduleOfToday;
