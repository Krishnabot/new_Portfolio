export const ABOUT_PAGE_META = {
  title: "Lorem Ipsum — Placeholder Headline",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna. Cras convallis lacus orci, tristique tincidunt magna consequat in.",
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
  { href: "#", label: "Follow on X", icon: "x" },
  { href: "#", label: "Follow on Instagram", icon: "instagram" },
  { href: "#", label: "Follow on GitHub", icon: "github" },
  { href: "#", label: "Follow on LinkedIn", icon: "linkedin" },
  {
    href: "mailto:placeholder@example.com",
    label: "placeholder@example.com",
    icon: "mail",
    dividerBefore: true,
  },
];
