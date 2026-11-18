import { useState } from "react";
import { Card } from "../components/Card";
import { Layouts } from "../data/layouts";

export const CatalogPage = () => {
  const options = [12, 6, 2];
  const [count, setCount] = useState(12);
  const [fit, setFit] = useState(false);

  return (
    <div className="space-y-12">
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-gray-900">
            Каталог через брейкпоинты
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {Layouts.map((layout) => (
            <Card key={layout.id} layout={layout} />
          ))}
        </div>
      </section>

      <section className="pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Каталог без брейкпоинтов
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-gray-200">
              <span className="text-xs text-gray-500 px-2">Количество:</span>
              {options.map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
                    count === n
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <button
              onClick={() => setFit(!fit)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-xs transition"
            >
              Переключить: <span className="font-semibold text-blue-600">{fit ? "auto-fit" : "auto-fill"}</span>
            </button>
          </div>
        </div>

        <div
          className={`grid gap-4 grid-cols-[repeat(auto-${
            fit ? "fit" : "fill"
          },minmax(200px,1fr))]`}
        >
          {Layouts.slice(0, count).map((layout) => (
            <Card key={layout.id} layout={layout} />
          ))}
        </div>
      </section>
    </div>
  );
};
