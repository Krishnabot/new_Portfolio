const modules = import.meta.glob("/src/content/articles/**/*.mdx", { eager: true });

export interface Article {
  title: string;
  description?: string;
  author?: string;
  date: string; 
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

type ArticleModule = {
  default: React.ComponentType<any>;
  article: Article;
};

function pathToSlug(p: string) {
  return p.split("/content/articles/")[1].replace(/\.mdx$/, "");
}

export function getAllArticles(): ArticleWithSlug[] {
  const list: ArticleWithSlug[] = Object.entries(modules).map(([path, mod]) => {
    const m = mod as unknown as ArticleModule;
    return {
      slug: pathToSlug(path),
      ...m.article,
    };
  });

  return list.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export function getArticleBySlug(slug: string) {
  const key = Object.keys(modules).find((p) => pathToSlug(p) === slug);
  if (!key) return null;

  const m = modules[key] as unknown as ArticleModule;
  return {
    Component: m.default,
    meta: { slug, ...m.article } as ArticleWithSlug,
  };
}
