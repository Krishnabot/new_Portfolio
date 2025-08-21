const pageTitles = {
  home: "Home - Sync With Krishna",
  about: "About Me",
  articles: "My Articles",
  articleDetail: (slug?: string) =>
    slug ? `${slug} • My Articles` : "My Articles",
  projects: "My Projects",
  uses: "My Tools",
};

export default pageTitles;
