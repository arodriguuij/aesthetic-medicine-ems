import React from "react";
import useMonths from "../useMonths";
import { classNames } from "@/utils/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  getDayStyles,
  getFormattedDate,
  isTodayInArray,
} from "../contact.utils";
import Skeleton from "@/components/Skeleton";

const Calendar = () => {
  const {
    selectedMonth,
    nextMonths,
    previousMonths,
    calendar,
    setSelectedDay,
  } = useMonths();

  return calendar === undefined ? (
    <div className="mx-auto max-w-7xl text-center mt-8 lg:px-8 sm:px-6 ">
      <Skeleton />
    </div>
  ) : (
    <div className="mx-auto max-w-7xl text-center mt-8 lg:px-8 sm:px-6 flex">
      {calendar &&
        selectedMonth &&
        [selectedMonth, calendar[calendar.indexOf(selectedMonth) + 1]].map(
          (month, monthIdx) => (
            <section
              key={monthIdx}
              className={classNames(
                monthIdx === 1 ? "hidden md:block sm:pl-6" : "sm:pr-6",
                "text-center w-full"
              )}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  className="-left-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  disabled={month.name === calendar[0].name}
                  onClick={previousMonths}
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <h2 className="text-sm font-semibold text-gray-900">
                  {month.name}
                </h2>
                <button
                  type="button"
                  className="-right-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  disabled={month.name === calendar[calendar.length - 1].name}
                  onClick={nextMonths}
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 mx-1 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                {month.days.map((day, dayIdx) => (
                  <button
                    key={day.date}
                    type="button"
                    onClick={() => setSelectedDay(day.date)}
                    className={classNames(
                      dayIdx === 0 ? "rounded-tl-lg" : "",
                      dayIdx === 6 ? "rounded-tr-lg" : "",
                      dayIdx === month.days.length - 7 ? "rounded-bl-lg" : "",
                      dayIdx === month.days.length - 1 ? "rounded-br-lg" : "",
                      "relative py-1.5  focus:z-10",
                      ...getDayStyles(day, month.id)
                    )}
                  >
                    <time
                      dateTime={day.date}
                      className={classNames(
                        isTodayInArray(day.date)
                          ? "bg-gray-900 font-semibold text-white"
                          : "",
                        "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                      )}
                    >
                      {getFormattedDate(day)}
                    </time>
                  </button>
                ))}
              </div>
            </section>
          )
        )}
    </div>
  );
};

export default Calendar;
