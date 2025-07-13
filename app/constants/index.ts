export const categoryStyles = {
  sky: "bg-sky-100/50 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200 hover:bg-sky-200 dark:hover:bg-sky-800",
  emerald:
    "bg-emerald-100/50 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-800",
  amber:
    "bg-amber-100/50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800",
  rose: "bg-rose-100/50 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200 hover:bg-rose-200 dark:hover:bg-rose-800",
  default: "bg-muted hover:bg-muted/80",
};

export type CategoryColor = keyof typeof categoryStyles;

export interface Category {
  name: string;
  slug: string;
  icon: string;
  color: CategoryColor;
}

export const categories: Category[] = [
  {
    name: "Tech & Code",
    slug: "tech",
    icon: "/icons/code.svg",
    color: "sky",
  },
  {
    name: "Career Growth",
    slug: "career",
    icon: "/icons/briefcase.svg",
    color: "emerald",
  },
  {
    name: "Life & Musings",
    slug: "life",
    icon: "/icons/coffee.svg",
    color: "amber",
  },
  {
    name: "Adventures",
    slug: "travel",
    icon: "/icons/globe.svg",
    color: "rose",
  },
];

export const FOOTER_DESCRIPTION =
  "A personal blog about my development journey, professional career, and a few of life's adventures along the way.";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Links",
    links: [
      { name: "Homepage", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Tags",
    links: [
      { name: "Coding", href: "/blog?cat=coding" },
      { name: "Travel", href: "/blog?cat=travel" },
      { name: "Life", href: "/blog?cat=life" },
      { name: "Career", href: "/blog?cat=career" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "Instagram", href: "#", external: true },
      { name: "LinkedIn", href: "#", external: true },
      { name: "GitHub", href: "#", external: true },
    ],
  },
];
