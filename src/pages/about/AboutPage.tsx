import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import {
  XIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/Icon";
import portraitImage from "@/assets/images/portrait.jpg";

import {
  ABOUT_PAGE_META,
  ABOUT_PARAGRAPHS,
  ABOUT_SOCIAL_LINKS,
  type AboutSocialLink,
} from "@/constants/about";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
        rel="noreferrer"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  );
}



const ICON_MAP: Record<AboutSocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  x: XIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon
};

export default function AboutPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {ABOUT_PAGE_META.title}
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {ABOUT_PAGE_META.intro}
              </p>
            </header>

            <div className="mt-16 sm:mt-20 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              {ABOUT_SOCIAL_LINKS.map((item, i) => {
                const Icon = ICON_MAP[item.icon];
                return (
                  <SocialLink
                    key={i}
                    href={item.href}
                    icon={Icon}
                    className={clsx(i > 0 && !item.dividerBefore && "mt-4", item.dividerBefore && "mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40")}
                  >
                    {item.label}
                  </SocialLink>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
