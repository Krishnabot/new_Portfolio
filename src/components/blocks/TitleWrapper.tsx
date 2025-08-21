import { type ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import pageTitles from "@/constants/pageTitles";
import { getArticleBySlug } from "@/lib/articles";

type Props = {
  title?: string;
  dynamic?: boolean;
  children: ReactNode;
};

export default function TitleWrapper({ title, dynamic, children }: Props) {
  const { slug } = useParams();

  if (dynamic && slug) {
    const article = getArticleBySlug(slug);
    if (article) {
      useDocumentTitle(`${article.meta.title} • My Articles`);
    }
  } else if (title) {
    useDocumentTitle(title);
  }

  return <>{children}</>;
}
