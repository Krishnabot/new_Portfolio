import { Link, NavLink } from "react-router-dom";

const link = "text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md transition-colors";
const active = "text-gray-900 font-medium";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold">MySite</Link>
        <nav className="flex items-center gap-1">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Articles", "/articles"],
            ["Projects", "/projects"],
            ["Uses", "/uses"],
          ].map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `${link} ${isActive ? active : ""}`}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
