import { Navigate, useParams } from "react-router-dom";
import { getArticleBySlug } from "@/lib/articles";
import ArticleLayout from "@/components/blocks/ArticleLayout";

const mdxComponents = {
  Image: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
};

export default function ArticleDetailPage() {
  const { slug = "" } = useParams();
  const found = getArticleBySlug(slug);
  if (!found) return <Navigate to="/articles" replace />;

  const { Component, meta } = found;

  return (
    <ArticleLayout article={{ title: meta.title, date: meta.date, description: meta.description }}>
      <Component components={mdxComponents} />
    </ArticleLayout>
  );
}
