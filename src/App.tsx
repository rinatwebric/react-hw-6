import { NavLink, Link, Route, Routes } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CalendarPage } from "./pages/CalendarPage";
import { LayoutDetailPage } from "./pages/LayoutDetailPage";

function App() {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 sm:px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center lg:justify-start ${
      isActive
        ? "bg-blue-50 text-blue-600 font-semibold shadow-xs"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 text-gray-900">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-gray-900">
            Галерея раскладок
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex flex-col lg:flex-row-reverse gap-6">
        <main className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/layouts/:id" element={<LayoutDetailPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </main>

        <aside className="lg:w-60 shrink-0">
          <div className="sticky top-20 p-2 sm:p-3 bg-white border border-gray-200 rounded-xl shadow-xs">
            <p className="hidden lg:block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 px-3">
              Навигация
            </p>
            <nav>
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
          </div>
        </aside>
      </div>

      <footer className="mt-auto border-t border-gray-200 bg-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-2 text-center sm:text-left">
          <span>Галерея раскладок © 2026</span>
          <span className="text-gray-400">Made by Rinat</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
