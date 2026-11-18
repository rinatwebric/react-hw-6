import { NavLink, Link, Route, Routes } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CalendarPage } from "./pages/CalendarPage";
import { LayoutDetailPage } from "./pages/LayoutDetailPage";

function App() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `p-2 rounded-md text-sm font-medium transition text-center lg:text-left ${
      isActive
        ? "bg-gray-100 text-gray-900 font-semibold"
        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="bg-white border-b border-gray-200 px-6 py-3.5">
        <Link to="/" className="text-lg font-semibold text-gray-900">
          Галерея раскладок
        </Link>
      </header>

      <div className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 flex flex-col lg:flex-row-reverse gap-6">
        <main className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/layouts/:id" element={<LayoutDetailPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </main>

        <aside className="lg:w-48 shrink-0">
          <nav className="bg-white border border-gray-200 rounded-lg p-2">
            <ul className="grid grid-cols-3 gap-1 lg:flex lg:flex-col">
              <li>
                <NavLink to="/" end className={getNavLinkClass}>
                  Каталог
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={getNavLinkClass}>
                  Дашборд
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className={getNavLinkClass}>
                  Календарь
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>

      <footer className="mt-auto bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-gray-500">
        Галерея раскладок 2026 made by Rinat
      </footer>
    </div>
  );
}

export default App;
