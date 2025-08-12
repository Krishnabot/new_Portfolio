import { Link } from "react-router-dom";
import { Container, Card, Button } from "@/components/ui";
import SocialIcons from "@/components/blocks/SocialIcons";
import { MailIcon, BriefcaseIcon, ArrowDownIcon } from "@/components/ui/Icon";
import clsx from "clsx";
import logoAirbnb from  "@/assets/images/logos/airbnb.svg";
import logoFacebook from '@/assets/images/logos/facebook.svg';
import logoPlanetaria from '@/assets/images/logos/planetaria.svg';
import logoStarbucks from '@/assets/images/logos/starbucks.svg';


type Article = { slug: string; title: string; date: string; description: string; };
const articles: Article[] = [
  { slug: "hello-world", title: "Hello World", date: "2025-08-01", description: "Kickoff post for the new site." },
  { slug: "second", title: "Second Post", date: "2025-08-05", description: "Thoughts on building with Vite + TS." },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card as="article" className="overflow-hidden">
      <Card.Title to={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {new Date(article.date).toLocaleDateString()}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function Newsletter() {
  return (
    <form action="#" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-md bg-white px-3 py-2 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
          />
        </span>
        <Button type="submit" className="ml-4 flex-none">Join</Button>
      </div>
    </form>
  );
}

type Role = {
  company: string;
  title: string;
  logo?: string; 
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
};

function RoleItem({ role }: { role: Role }) {
  const startLabel = typeof role.start === "string" ? role.start : role.start.label;
  const startDate = typeof role.start === "string" ? role.start : role.start.dateTime;
  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {}
        <img src={role.logo ?? "https://placehold.co/40"} alt="" className="h-7 w-7" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${startLabel} until ${endLabel}`}>
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  const resume: Role[] = [
    { logo: logoPlanetaria, company: "Planetaria", title: "CEO", start: "2019", end: { label: "Present", dateTime: new Date().getFullYear().toString() } },
    { logo: logoAirbnb,    company: "Airbnb",     title: "Product Designer", start: "2014", end: "2019" },
    { logo: logoFacebook,  company: "Facebook",   title: "iOS Software Engineer", start: "2011", end: "2014" },
    { logo: logoStarbucks, company: "Starbucks",  title: "Shift Supervisor", start: "2008", end: "2011" },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, i) => <RoleItem key={i} role={role} />)}
      </ol>
      <Button as="a" href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>

    </div>
  );
}

function Photos() {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];
  const images = [
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=600",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=600",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((src, i) => (
          <div
            key={src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[i % rotations.length]
            )}
          >
            <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Krishna, a software designer and entrepreneur based in Osaka. I’m the founder and CEO
            of XYZ, where we develop technologies that empower regular people to explore space on their own terms.
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>
      </Container>

      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
