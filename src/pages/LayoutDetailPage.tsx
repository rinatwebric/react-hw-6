import { Link, useParams } from "react-router-dom";
import { Layouts } from "../data/layouts";

export const LayoutDetailPage = () => {
  const { id } = useParams();
  const layout = Layouts.find((l) => l.id === id);

  if (!layout) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <p className="text-gray-600 mb-4">Раскладка не найдена</p>
        <Link to="/" className="text-sm font-medium text-blue-600 hover:underline">
          ← Назад в каталог
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4 max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900">{layout.title}</h1>
      <p className="text-gray-600 leading-relaxed">{layout.description}</p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-block border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-md px-4 py-2 text-sm font-medium text-gray-700"
        >
          ← Назад в каталог
        </Link>
      </div>
    </article>
  );
};
