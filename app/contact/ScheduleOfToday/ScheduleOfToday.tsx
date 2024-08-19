import React from "react";
import { getScheduleOfToday } from "../contact.utils";

const ScheduleOfToday = () => {
  const schedule = getScheduleOfToday();
  return (
    <div className="mx-auto sm:px-6 mt-4 lg:max-w-7xl lg:px-8">
      {schedule ? (
        <h2 className="text-base font-semibold leading-7 text-amber-500">
          Hoy, la clinica está abierta: {schedule}
        </h2>
      ) : (
        <h2 className="text-base font-semibold leading-7 text-amber-500">
          Hoy, la clinica está cerrada
        </h2>
      )}
    </div>
  );
};

export default ScheduleOfToday;
