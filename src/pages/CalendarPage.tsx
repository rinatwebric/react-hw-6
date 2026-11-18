export const CalendarPage = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const first = new Date(year, month, 1);
  const shift = (first.getDay() + 6) % 7;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDaysInMonth = new Date(year, month, 0).getDate();

  interface CalendarCell {
    day: number;
    isCurrentMonth: boolean;
    isToday: boolean;
  }

  const cells: CalendarCell[] = [];

  for (let i = shift - 1; i >= 0; i--) {
    cells.push({
      day: prevDaysInMonth - i,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      day: d,
      isCurrentMonth: true,
      isToday: d === today.getDate(),
    });
  }

  const remainingDays = (7 - (cells.length % 7)) % 7;
  for (let d = 1; d <= remainingDays; d++) {
    cells.push({
      day: d,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  const monthName = today.toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 max-w-lg">
      <h1 className="text-lg font-semibold text-gray-900 mb-4">{capitalizedMonth}</h1>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((name) => (
          <div key={name} className="py-1">{name}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {cells.map((cell, idx) => (
          <div
            key={idx}
            className={`h-9 flex items-center justify-center rounded ${
              cell.isToday
                ? "bg-blue-600 text-white font-semibold"
                : !cell.isCurrentMonth
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >
            {cell.day}
          </div>
        ))}
      </div>
    </div>
  );
};
