import { useParams } from "react-router-dom";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Article: {slug}</h1>
      <p className="text-gray-600">Your article content goes here.</p>
    </div>
  );
}
