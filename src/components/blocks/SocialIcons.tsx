import { XIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icon";

export default function SocialIcons() {
  const base = "h-6 w-6 fill-zinc-500 transition";
  const hover = "group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300";

  return (
    <div className="flex gap-6">
      <a className="group -m-1 p-1" aria-label="Follow on X" href="https://x.com/your_handle" target="_blank" rel="noreferrer">
        <XIcon className={`${base} ${hover}`} />
      </a>
      <a className="group -m-1 p-1" aria-label="Follow on Instagram" href="https://instagram.com/your_handle" target="_blank" rel="noreferrer">
        <InstagramIcon className={`${base} ${hover}`} />
      </a>
      <a className="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/your_handle" target="_blank" rel="noreferrer">
        <GitHubIcon className={`${base} ${hover}`} />
      </a>
      <a className="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://linkedin.com/in/your_handle" target="_blank" rel="noreferrer">
        <LinkedInIcon className={`${base} ${hover}`} />
      </a>
    </div>
  );
}
