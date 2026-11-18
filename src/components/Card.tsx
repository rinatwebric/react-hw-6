import { Link } from "react-router-dom";
import type { Layout } from "../data/layouts";

interface CardProps {
  layout: Layout;
}

export function Card({ layout }: CardProps) {
  return (
    <article className="flex flex-col gap-3 border border-gray-200 rounded-xl p-5 bg-white shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200">
      <h3 className="font-semibold text-base text-gray-900 leading-snug">
        {layout.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
        {layout.description}
      </p>
      <Link
        to={`/layouts/${layout.id}`}
        className="mt-auto block text-center py-2 px-3 text-sm font-medium rounded-lg bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 border border-gray-200 hover:border-blue-600 transition-colors"
      >
        Подробнее →
      </Link>
    </article>
  );
}
