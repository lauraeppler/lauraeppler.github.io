/// <reference types="vite/client" />

declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  import { JSX } from "react";
  export default function MDXContent(props: MDXProps): JSX.Element;
}
