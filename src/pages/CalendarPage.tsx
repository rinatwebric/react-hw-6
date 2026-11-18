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
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {capitalizedMonth}
          </h1>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((name) => (
            <div
              key={name}
              className="text-center text-xs font-semibold uppercase tracking-wider py-1.5 text-gray-500"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {cells.map((cell, idx) => {
            if (cell.isToday) {
              return (
                <div
                  key={idx}
                  className="aspect-square flex items-center justify-center rounded-xl text-sm font-bold bg-blue-600 text-white shadow-xs"
                >
                  {cell.day}
                </div>
              );
            }

            if (!cell.isCurrentMonth) {
              return (
                <div
                  key={idx}
                  className="aspect-square flex items-center justify-center rounded-xl text-sm font-medium text-gray-400 bg-gray-50/60"
                >
                  {cell.day}
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="aspect-square flex items-center justify-center rounded-xl text-sm font-medium text-gray-800"
              >
                {cell.day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
