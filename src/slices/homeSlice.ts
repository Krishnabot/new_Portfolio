import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { HOME_LABELS } from "@/constants/home";

import railsImage from "@/assets/images/photobanner_images/rails.jpg";
import postgresImage from "@/assets/images/photobanner_images/postgresql.png";
import reactImage from "@/assets/images/photobanner_images/react.jpg";
import pythonImage from "@/assets/images/photobanner_images/python.jpg";
import unityImage from "@/assets/images/photobanner_images/unity.png";
import planetariaLogo from "@/assets/images/logos/planetaria.svg";
import airbnbLogo from "@/assets/images/logos/airbnb.svg";
import facebookLogo from "@/assets/images/logos/facebook.svg";
import starbucksLogo from "@/assets/images/logos/starbucks.svg";

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
  photos: string[];
  resume: Role[];
};

const currentYear = new Date().getFullYear().toString();

const initialState: HomeState = {
  introTitle: HOME_LABELS.introTitle,
  introBody: HOME_LABELS.introBody,

  photos: [railsImage, postgresImage, reactImage, pythonImage, unityImage],

  resume: [
    {
      logo: planetariaLogo,
      company: HOME_LABELS.resume.planetariaCompany,
      title: HOME_LABELS.resume.planetariaTitle,
      start: "2019",
      end: { label: HOME_LABELS.resume.presentLabel, dateTime: currentYear },
    },
    {
      logo: airbnbLogo,
      company: HOME_LABELS.resume.airbnbCompany,
      title: HOME_LABELS.resume.airbnbTitle,
      start: "2014",
      end: "2019",
    },
    {
      logo: facebookLogo,
      company: HOME_LABELS.resume.facebookCompany,
      title: HOME_LABELS.resume.facebookTitle,
      start: "2011",
      end: "2014",
    },
    {
      logo: starbucksLogo,
      company: HOME_LABELS.resume.starbucksCompany,
      title: HOME_LABELS.resume.starbucksTitle,
      start: "2008",
      end: "2011",
    },
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
    setPhotos(state, action: PayloadAction<string[]>) {
      state.photos = action.payload;
    },
    setResume(state, action: PayloadAction<Role[]>) {
      state.resume = action.payload;
    },
  },
});

export const { setIntro, setPhotos, setResume } = homeSlice.actions;
export default homeSlice.reducer;
