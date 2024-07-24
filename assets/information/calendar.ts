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

export const calendar: Calendar[] = [
  {
    id: 7,
    name: "Julio",
    days: [
      {
        date: "2024-07-01",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-02",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-03",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-04",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-05",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-06",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-07",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-08",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-09",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-10",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-11",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-12",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-13",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-14",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-15",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-16",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-17",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-18",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-19",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-20",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-21",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-22",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-23",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-24",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-25",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-26",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-27",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-28",
        isCurrentMonth: true,
      },
      {
        date: "2024-07-29",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-30",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-07-31",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-08-01",
      },
      {
        date: "2024-08-02",
      },
      {
        date: "2024-08-03",
      },
      {
        date: "2024-08-04",
      },
    ],
  },
  {
    id: 8,
    name: "Agosto",
    days: [
      {
        date: "2024-07-29",
      },
      {
        date: "2024-07-30",
      },
      {
        date: "2024-07-31",
      },
      {
        date: "2024-08-01",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-08-02",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-08-03",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-04",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-05",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-06",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-07",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-08",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-09",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-10",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-11",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-12",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-13",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-14",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-15",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-16",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-17",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-18",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-19",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-20",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-21",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-22",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-23",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-24",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-25",
        isCurrentMonth: true,
      },
      {
        date: "2024-08-26",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-08-27",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-08-28",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-08-29",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-08-30",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        isCurrentMonth: true,
        date: "2024-08-31",
      },
      {
        date: "2024-09-01",
      },
    ],
  },
  {
    id: 9,
    name: "Septiembre",
    days: [
      {
        date: "2024-08-26",
      },
      {
        date: "2024-08-27",
      },
      {
        date: "2024-08-28",
      },
      {
        date: "2024-08-29",
      },
      {
        date: "2024-08-30",
      },
      {
        date: "2024-08-31",
      },
      {
        date: "2024-09-01",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-09-02",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-09-03",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-09-04",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-09-05",
        isCurrentMonth: true,
        clinic: "Navalmoral",
      },
      {
        date: "2024-09-06",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-07",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-08",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-09",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-10",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-11",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-12",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-13",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-14",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-15",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-16",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-17",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-18",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-19",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-20",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-21",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-22",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-23",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-24",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-25",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-26",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-27",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-28",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-29",
        isCurrentMonth: true,
      },
      {
        date: "2024-09-30",
      },
      {
        date: "2024-10-01",
      },
      {
        date: "2024-10-02",
      },
      {
        date: "2024-10-03",
      },
      {
        date: "2024-10-04",
      },
      {
        date: "2024-10-05",
      },
      {
        date: "2024-10-06",
      },
    ],
  },
  {
    id: 10,
    name: "Octubre",
    days: [
      {
        date: "2024-09-30",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-01",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-02",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-03",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-04",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-05",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-06",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-07",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-08",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-09",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-10",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-11",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-12",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-13",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-14",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-15",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-16",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-17",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-18",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-19",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-20",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-21",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-22",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-23",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-24",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-25",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-26",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-27",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-28",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-29",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-30",
        isCurrentMonth: true,
      },
      {
        date: "2024-10-31",
      },
      {
        date: "2024-11-01",
      },
      {
        date: "2024-11-02",
      },
      {
        date: "2024-11-03",
      },
    ],
  },
  {
    id: 11,
    name: "Noviembre",
    days: [
      {
        date: "2024-10-28",
      },
      {
        date: "2024-10-29",
      },
      {
        date: "2024-10-30",
      },
      {
        date: "2024-10-31",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-01",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-02",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-03",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-04",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-05",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-06",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-07",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-08",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-09",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-10",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-11",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-12",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-13",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-14",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-15",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-16",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-17",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-18",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-19",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-20",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-21",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-22",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-23",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-24",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-25",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-26",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-27",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-28",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-29",
        isCurrentMonth: true,
      },
      {
        date: "2024-11-30",
      },
      {
        date: "2024-12-01",
      },
    ],
  },
  {
    id: 12,
    name: "Diciembre",
    days: [
      {
        date: "2024-11-25",
      },
      {
        date: "2024-11-26",
      },
      {
        date: "2024-11-27",
      },
      {
        date: "2024-11-28",
      },
      {
        date: "2024-11-29",
      },
      {
        date: "2024-11-30",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-01",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-02",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-03",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-04",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-05",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-06",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-07",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-08",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-09",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-10",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-11",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-12",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-13",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-14",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-15",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-16",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-17",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-18",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-19",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-20",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-21",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-22",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-23",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-24",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-25",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-26",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-27",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-28",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-29",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-30",
        isCurrentMonth: true,
      },
      {
        date: "2024-12-31",
      },
      {
        date: "2025-01-01",
      },
      {
        date: "2025-01-02",
      },
      {
        date: "2025-01-03",
      },
      {
        date: "2025-01-04",
      },
      {
        date: "2025-01-05",
      },
    ],
  },
];
