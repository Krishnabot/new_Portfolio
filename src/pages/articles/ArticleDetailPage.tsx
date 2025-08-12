import { useParams, Navigate } from "react-router-dom";
import { getArticleBySlug } from "@/lib/articles";

const mdxComponents = {
  Image: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
};

export default function ArticleDetailPage() {
  const { slug = "" } = useParams();
  const found = getArticleBySlug(slug);
  if (!found) return <Navigate to="/articles" replace />;

  const { Component } = found;
  return <Component components={mdxComponents} />;
}
