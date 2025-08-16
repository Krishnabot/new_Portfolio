import { useMemo } from "react";
import { useAppSelector } from "@/app/hooks";

import { Container, Button } from "@/components/ui";
import SocialIcons from "@/components/blocks/SocialIcons";
import { BriefcaseIcon, ArrowDownIcon } from "@/components/ui/Icon";

import PhotoBanner from "./PhotoBanner";
import Newsletter from "./Newsletter";
import ArticlePreview from "./ArticlePreview";

import type { Role } from "@/slices/homeSlice";
import { getAllArticles } from "@/lib/articles";
import { Link } from "react-router-dom";

function RoleItem({ role }: { role: Role }) {
  const startLabel = typeof role.start === "string" ? role.start : role.start.label;
  const startDate = typeof role.start === "string" ? role.start : role.start.dateTime;
  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img src={role.logo ?? "https://placehold.co/40"} alt="" className="h-7 w-7" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>

        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>

        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  const resume = useAppSelector((s) => s.home.resume);
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {resume.map((role, i) => (
          <RoleItem key={i} role={role} />
        ))}
      </ol>

      <Button as="a" href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

export default function HomePage() {
  const { introTitle, introBody } = useAppSelector((s) => s.home);

  const articles = useMemo(() => getAllArticles().slice(0, 3), []);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {introTitle}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {introBody}
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>
      </Container>

      <PhotoBanner />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticlePreview key={article.slug} article={article} />
            ))}

            <div>
              <Link
                to="/articles"
                className="text-sm font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400"
              >
                View all articles →
              </Link>
            </div>
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
