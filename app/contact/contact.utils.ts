export interface Day {
  date: string;
  clinic?: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
}

export interface Calendar {
  id: number;
  name: string;
  days: Day[];
}

export interface DayObject {
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
}

export const getTodayString = (): string => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const isTodayInArray = (date: string): boolean => {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0]; // Obtener la fecha de hoy en formato 'yyyy-mm-dd'

  return date === todayString;
};

export const getScheduleOfToday = (): string | undefined => {
  const dayOfTheWeek = new Date().getDay();

  switch (dayOfTheWeek) {
    case 1: // Monday
      return "15:00-20:00";
    case 2: // Martes
      return "9:00-13:00 y 16:00-20:00";
    case 4: // Jueves
      return "10:00-14:00 y 16:00-20:00";
    case 5: // Viernes
      return "9:00-15:00";
    default:
      return undefined;
  }
};

export const isCurrentMonthInArray = (
  date: string,
  monthId: number
): boolean => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthString = `${currentYear}-${monthId
    .toString()
    .padStart(2, "0")}`; // Formato 'yyyy-mm'

  return date.startsWith(currentMonthString);
};

export const getDayStyles = (day: Day, selectedMonthId: number) => {
  const styles: string[] = [];
  /* if (selectedDay === day.date) {
    styles.push("border-double border-4 border-sky-500");
  } //bg-amber-500 */
  if (day.clinic === "Navalmoral") {
    styles.push("bg-amber-200	!important");
  } else if (day.clinic === "Marbella") {
    styles.push("bg-amber-200 !important");
  } else
    styles.push(
      isCurrentMonthInArray(day.date, selectedMonthId)
        ? "bg-white text-gray-900"
        : "bg-gray-50 text-gray-400"
    );

  return styles;
};

export const getFormattedDate = (day: Day): string | undefined => {
  if (!day.date) {
    return undefined;
  }

  const dateParts = day.date.split("-");
  const lastPart = dateParts.pop();

  return lastPart ? lastPart.replace(/^0/, "") : undefined;
};

export const generateCurrentAndNextSixMonths = (): Calendar[] => {
  const today = new Date();
  const months: Calendar[] = [];

  // Nombres de los meses en español
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today.getFullYear(), today.getMonth() + i, 1);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const currentMonthName = monthNames[currentMonth];

    // Determinar el primer día del mes y el último día del mes
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    // Encontrar el primer lunes antes o el mismo día del primer día del mes
    const startDate = new Date(firstDayOfMonth);
    while (startDate.getDay() !== 1) {
      startDate.setDate(startDate.getDate() - 1);
    }

    // Encontrar el último domingo después o el mismo día del último día del mes
    const endDate = new Date(lastDayOfMonth);
    while (endDate.getDay() !== 0) {
      endDate.setDate(endDate.getDate() + 1);
    }
    endDate.setDate(endDate.getDate() + 1);

    // Array para almacenar los días del mes actual
    const daysArray: DayObject[] = [];

    // Construir el array de días del mes actual (incluyendo días de otros meses)
    const currentDatePointer = new Date(
      startDate.setDate(startDate.getDate() + 1)
    );
    while (currentDatePointer <= endDate) {
      const dateString = currentDatePointer.toISOString().split("T")[0];
      const dayObject: DayObject = { date: dateString };

      if (currentDatePointer.getMonth() === currentMonth) {
        if (
          currentDatePointer.getDate() === today.getDate() &&
          currentDatePointer.getMonth() === today.getMonth() &&
          currentDatePointer.getFullYear() === today.getFullYear()
        ) {
          dayObject.isToday = true;
        }
        dayObject.isCurrentMonth = true;
      }

      daysArray.push(dayObject);
      currentDatePointer.setDate(currentDatePointer.getDate() + 1);
    }

    // Objeto del mes actual
    const monthObject: Calendar = {
      name: currentMonthName,
      id: currentMonth + 1,
      days: daysArray,
    };

    months.push(monthObject);
  }

  return months;
};
