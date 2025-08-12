declare module "*.mdx" {
  import type { ComponentType } from "react";
  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
  export const article: {
    title: string;
    date: string;
    description?: string;
    author?: string;
  };
  export const metadata: any;
}
