import { Link, useParams } from "react-router-dom";
import { Layouts } from "../data/layouts";

export const LayoutDetailPage = () => {
  const { id } = useParams();
  const layout = Layouts.find((l) => l.id === id);
  if (!layout) return <p>Раскладка не найдена</p>;
  return (
    <article className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{layout.title}</h1>
      <p>{layout.description}</p>
      <Link to="/" className="">← Назад к каталогу</Link>
    </article>
  );
}
