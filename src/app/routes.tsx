import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ArticlesPage from "@/pages/articles";
import ArticleDetailPage from "@/pages/articles/ArticleDetailPage";
import ProjectsPage from "@/pages/projects";
import UsesPage from "@/pages/uses";
import pageTitles from "@/constants/pageTitles";
import TitleWrapper from "@/components/blocks/TitleWrapper"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <TitleWrapper title={pageTitles.home}>
            <HomePage />
          </TitleWrapper>
        ),
      },
      {
        path: "about",
        element: (
          <TitleWrapper title={pageTitles.about}>
            <AboutPage />
          </TitleWrapper>
        ),
      },
      {
        path: "articles",
        element: (
          <TitleWrapper title={pageTitles.articles}>
            <ArticlesPage />
          </TitleWrapper>
        ),
      },
      {
        path: "articles/:slug",
        element: (
          <TitleWrapper dynamic>
            <ArticleDetailPage />
          </TitleWrapper>
        ),
      },
      {
        path: "projects",
        element: (
          <TitleWrapper title={pageTitles.projects}>
            <ProjectsPage />
          </TitleWrapper>
        ),
      },
      {
        path: "uses",
        element: (
          <TitleWrapper title={pageTitles.uses}>
            <UsesPage />
          </TitleWrapper>
        ),
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
