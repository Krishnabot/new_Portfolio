import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ArticlesPage from "@/pages/articles";
import ArticleDetailPage from "@/pages/articles/ArticleDetailPage";
import ProjectsPage from "@/pages/projects";
import UsesPage from "@/pages/uses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "articles/:slug", element: <ArticleDetailPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "uses", element: <UsesPage /> }
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
