import { Link } from "react-router-dom";
import type { Layout } from "../data/layouts";

interface CardProps {
  layout: Layout;
}

export function Card({ layout }: CardProps) {
  return (
    <article className="h-full bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between gap-3 hover:border-gray-300">
      <div>
        <h3 className="font-semibold text-gray-900">{layout.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{layout.description}</p>
      </div>
      <Link
        to={`/layouts/${layout.id}`}
        className="mt-auto block text-center border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-md py-1.5 text-sm font-medium text-gray-700"
      >
        Подробнее
      </Link>
    </article>
  );
}
