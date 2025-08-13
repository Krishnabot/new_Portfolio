import { Card } from "@/components/ui";
import type { Article } from "@/slices/homeSlice";

export default function ArticlePreview({ article }: { article: Article }) {
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
