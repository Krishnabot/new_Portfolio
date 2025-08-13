import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <li>
      <NavLink
        to={to}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </NavLink>
    </li>
  );
}
