import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Article = { slug: string; title: string; date: string; description: string };
export type Role = {
  company: string;
  title: string;
  logo?: string; 
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
};

type HomeState = {
  introTitle: string;
  introBody: string;
  articles: Article[];
  photos: string[];
  resume: Role[];
};

const currentYear = new Date().getFullYear().toString();

const initialState: HomeState = {
  introTitle: "Software designer, founder, and amateur astronaut.",
  introBody:
    "I’m Krishna, a software designer and entrepreneur based in Osaka. I’m the founder and CEO of XYZ, where we develop technologies that empower regular people to explore space on their own terms.",
  articles: [
    { slug: "hello-world", title: "Hello World", date: "2025-08-01", description: "Kickoff post for the new site." },
    { slug: "second", title: "Second Post", date: "2025-08-05", description: "Thoughts on building with Vite + TS." },
  ],
  photos: [
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=600",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=600",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600",
  ],
  resume: [
    { logo: "/src/assets/images/logos/planetaria.svg", company: "Planetaria", title: "CEO", start: "2019", end: { label: "Present", dateTime: currentYear } },
    { logo: "/src/assets/images/logos/airbnb.svg",     company: "Airbnb",     title: "Product Designer",       start: "2014", end: "2019" },
    { logo: "/src/assets/images/logos/facebook.svg",   company: "Facebook",   title: "iOS Software Engineer",  start: "2011", end: "2014" },
    { logo: "/src/assets/images/logos/starbucks.svg",  company: "Starbucks",  title: "Shift Supervisor",       start: "2008", end: "2011" },
  ],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setIntro(state, action: PayloadAction<{ title: string; body: string }>) {
      state.introTitle = action.payload.title;
      state.introBody = action.payload.body;
    },
    setArticles(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
    },
    setPhotos(state, action: PayloadAction<string[]>) {
      state.photos = action.payload;
    },
    setResume(state, action: PayloadAction<Role[]>) {
      state.resume = action.payload;
    },
  },
});

export const { setIntro, setArticles, setPhotos, setResume } = homeSlice.actions;
export default homeSlice.reducer;
