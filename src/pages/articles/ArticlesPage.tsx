import { Link } from "react-router-dom";

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Articles</h1>
      <ul className="list-disc pl-5">
        <li><Link className="text-indigo-600 hover:underline" to="/articles/hello-world">Hello World</Link></li>
      </ul>
    </div>
  );
}
