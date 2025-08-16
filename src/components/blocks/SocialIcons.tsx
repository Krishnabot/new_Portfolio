import { ABOUT_SOCIAL_LINKS } from "@/constants/about";
import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icon";

const ICON_MAP = {
  x: XIcon,
  instagram: InstagramIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
} as const;

export default function SocialIcons() {
  const base = "h-6 w-6 fill-zinc-500 transition";
  const hover =
    "group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300";

  return (
    <div className="flex gap-6">
      {ABOUT_SOCIAL_LINKS.map((item) => {
        const Icon = ICON_MAP[item.icon];
        return (
          <a
            key={item.icon}
            className="group -m-1 p-1"
            aria-label={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <Icon className={`${base} ${hover}`} />
          </a>
        );
      })}
    </div>
  );
}
