import { useState } from "react";
import { Card } from "../components/Card";
import { Layouts } from "../data/layouts";

export const CatalogPage = () => {
  const options = [12, 6, 2];
  const [count, setCount] = useState(12);
  const [fit, setFit] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Каталог через брейкпоинты
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Layouts.map((layout) => (
            <Card key={layout.id} layout={layout} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Каталог без брейкпоинтов
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex bg-white border border-gray-200 rounded-md p-0.5">
              {options.map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className={`px-2.5 py-1 text-xs font-medium rounded ${
                    count === n
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              onClick={() => setFit(!fit)}
              className="border border-gray-200 bg-white hover:bg-gray-50 rounded-md px-3 py-1 text-xs font-medium text-gray-700"
            >
              {fit ? "auto-fit" : "auto-fill"}
            </button>
          </div>
        </div>

        <div
          className={`grid gap-4 ${
            fit
              ? "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
              : "grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
          }`}
        >
          {Layouts.slice(0, count).map((layout) => (
            <Card key={layout.id} layout={layout} />
          ))}
        </div>
      </section>
    </div>
  );
};
