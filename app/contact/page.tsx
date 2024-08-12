"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  getDayStyles,
  getFormattedDate,
  isTodayInArray,
} from "./contact.utils";
import { classNames } from "../../utils/utils";
import Form from "../../components/Form";
import useMonths from "./useMonths";
import Map from "../../components/Map/Map";
import ContactSummary from "../../components/ContactSummary";

const Contact = () => {
  const {
    selectedMonth,
    nextMonths,
    previousMonths,
    calendar,
    setSelectedDay,
  } = useMonths();

  return (
    <>
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-amber-100/20 py-4">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Calendario
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Consulta el calendario para conocer los días en los que estoy
            disponible cada mes en las distintas clínicas donde trabajo.
          </p>
        </div>

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
                      disabled={
                        month.name === calendar[calendar.length - 1].name
                      }
                      onClick={nextMonths}
                    >
                      <span className="sr-only">Next month</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
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
                          dayIdx === month.days.length - 7
                            ? "rounded-bl-lg"
                            : "",
                          dayIdx === month.days.length - 1
                            ? "rounded-br-lg"
                            : "",
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
      </div>

      {/* Form */}
      <div>
        <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8 mt-16">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Contacta con nostros a través de email
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            No dudes en contactarnos! Envía tu consulta o comentario por correo
            electrónico ahora mismo
          </p>
        </div>
        <div className="mx-auto max-w-7xl mt-8 sm:px-6 lg:px-8 justify-center pb-4	">
          <Form />
        </div>
      </div>

      <ContactSummary />

      {/* Map */}
      <div className="mx-auto max-w-7xl text-center sm:px-6 lg:px-8 justify-center ">
        <Map />
      </div>
    </>
  );
};

export default Contact;
