export const DashboardPage = () => {
  return (
    <div>
      <section className="grid gap-4 grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-2 md:row-span-2 bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Активность</h3>
            <p className="text-sm text-gray-500 mt-0.5">Статистика за текущую неделю</p>
          </div>
          <p className="text-2xl font-bold text-green-600 mt-4">+24% к прошлому месяцу</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">Баланс</h3>
          <p className="text-xl font-bold text-gray-900 mt-1">+124 500 сом</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">Транзакции</h3>
          <p className="text-sm text-gray-600 mt-1">Перевод: +5 000 сом</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">Цели</h3>
          <p className="text-sm text-gray-600 mt-1">2 цели из 5 закрыты</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">Уведомления</h3>
          <p className="text-sm text-gray-600 mt-1">3 новых сообщения</p>
        </div>

        <div className="md:col-span-3 bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">Расходы</h3>
          <p className="text-xl font-bold text-red-500 mt-1">-42 300 сом</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900">Действия</h3>
          <p className="text-sm text-gray-600 mt-1">Пополнить • Перевести • Вывести</p>
        </div>
      </section>
    </div>
  );
};
