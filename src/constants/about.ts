export const ABOUT_PAGE_META = {
  title: "Krishna Acharya — Full-Stack Developer",
  intro:
    "I’m Krishna, a full-stack developer based in Osaka. I enjoy building scalable apps, experimenting with design, and contributing to open-source.",
};

export const ABOUT_PARAGRAPHS: string[] = [
  "Vivamus in urna eu enim porttitor consequat. Proin vitae pulvinar libero. Integer id bibendum diam. Sed consectetur, nisi in facilisis fermentum, lacus quam convallis nulla, in facilisis libero lacus in sapien.",
  "Phasellus id sapien sit amet odio tincidunt porta. Donec et tincidunt nunc, ut tincidunt orci. Mauris nec magna vitae neque sagittis lacinia.",
  "Fusce dignissim, sapien et elementum vehicula, magna quam ultricies lorem, et vulputate odio nulla nec ligula. Nullam venenatis massa vel enim pulvinar, nec fermentum libero scelerisque.",
];

export type AboutSocialLink = {
  href: string;
  label: string;
  icon: "x" | "instagram" | "github" | "linkedin" | "mail";
  dividerBefore?: boolean;
};

export const ABOUT_SOCIAL_LINKS: AboutSocialLink[] = [
  {
    href: "https://x.com/metamorphossed",
    label: "Connect on X",
    icon: "x",
  },
  {
    href: "https://www.instagram.com/eastern_anarchy/",
    label: "Connect on Instagram",
    icon: "instagram",
  },
  {
    href: "https://github.com/Krishnabot",
    label: "Connect on  GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/krishnabot/",
    label: "Connect on LinkedIn",
    icon: "linkedin",
  },
  {
    href: "mailto:librarysimyparadise@email.com",
    label: "Email me",
    icon: "mail",
    dividerBefore: true,
  },
];
