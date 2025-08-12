import { NavLink } from "react-router-dom";
import { ContainerInner, ContainerOuter } from "@/components/ui/Container";
import CreativeCommonsLogo  from "@/assets/images/logos/ccheart_red.svg";

function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </NavLink>
  );
}


export default function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavItem to="/about">About</NavItem>
                <NavItem to="/articles">Article</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/uses">Uses</NavItem>
              </div>

              <p className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
                <img
                  src={CreativeCommonsLogo}
                  alt="Creative Commons Logo"
                  className="w-5 h-5 object-contain"
                  loading="lazy"
                />                <span>
                  {new Date().getFullYear()} Krishna — Thanks to Tailwind UI for
                  Template
                </span>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
