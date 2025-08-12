import { NavLink } from "react-router-dom";
import { ContainerInner, ContainerOuter } from "@/components/ui/Container";
import CCInfoPopover from "@/components/ui/CCInfoPopover";
import CreativeCommonsLogo from "@/assets/images/logos/ccheart_red.svg";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className="text-sm font-medium text-zinc-600 transition hover:text-teal-500 dark:text-zinc-300 dark:hover:text-teal-400"
    >
      {children}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-24">
      <ContainerOuter>
        <ContainerInner>
          <div className="py-8 flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <NavItem to="/about">About</NavItem>
              <NavItem to="/articles">Articles</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/uses">Uses</NavItem>
            </nav>

            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <CCInfoPopover logoSrc={CreativeCommonsLogo} size={20} />
              <span>
                {new Date().getFullYear()} Krishna — Thanks to{" "}
                <a
                  href="https://tailwindcss.com/plus/templates/spotlight/preview"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-teal-500 dark:hover:text-teal-400"
                >
                  Tailwind UI Spotlight
                </a>{" "}
                for template
              </span>
            </div>
          </div>
        </ContainerInner>
      </ContainerOuter>
    </footer>
  );
}
