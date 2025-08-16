import { Card } from "@/components/ui/Card";
import type { ArticleWithSlug } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";

export default function ArticlePreview({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article" className="overflow-hidden">
      <Card.Title to={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      {article.description && <Card.Description>{article.description}</Card.Description>}
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}
