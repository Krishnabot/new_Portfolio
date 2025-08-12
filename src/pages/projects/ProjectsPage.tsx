import { Card } from "@/components/ui/Card";
import { SimpleLayout } from "@/layouts/SimpleLayout";

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

const projects = [
  {
    name: "Project Alpha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat massa at dapibus luctus.",
    link: { href: "https://example.com", label: "example.com" },
    logoLetter: "A",
  },
  {
    name: "Beta Suite",
    description:
      "Suspendisse potenti. Curabitur fermentum sapien in faucibus porta. Pellentesque habitant morbi.",
    link: { href: "https://github.com", label: "github.com" },
    logoLetter: "B",
  },
  {
    name: "Gamma Tools",
    description:
      "Praesent vehicula justo eget cursus rhoncus. Nisl velit sodales arcu, ut luctus purus sem.",
    link: { href: "https://example.org", label: "example.org" },
    logoLetter: "G",
  },
  {
    name: "Delta Kit",
    description:
      "Etiam a laoreet augue. Proin vitae ex a eros congue pellentesque. Donec non lectus fermentum.",
    link: { href: "https://example.dev", label: "example.dev" },
    logoLetter: "D",
  },
  {
    name: "Omega Engine",
    description:
      "Mauris non sapien nec metus consequat auctor. Quisque a nisl non urna iaculis efficitur.",
    link: { href: "https://github.com", label: "github.com" },
    logoLetter: "Ω",
  },
  {
    name: "Nova Lab",
    description:
      "Vivamus euismod nibh eget libero vulputate. Cras in erat ac mi accumsan bibendum elementum.",
    link: { href: "https://example.net", label: "example.net" },
    logoLetter: "N",
  },
];

function LogoBubble({ letter }: { letter: string }) {
  return (
    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
      <span className="text-base font-semibold text-zinc-700 dark:text-zinc-200">
        {letter}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <SimpleLayout
        title="Selected projects and experiments."
        intro="This is placeholder copy. Replace it with a short overview of your work: what you build, your areas of focus, and where people can explore more."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <LogoBubble letter={project.logoLetter} />

              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {/* External link — use <a> */}
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{project.name}</span>
                </a>
              </h2>

              <Card.Description>{project.description}</Card.Description>

              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </section>
  );
}
