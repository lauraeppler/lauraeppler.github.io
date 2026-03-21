import Maintenance from "@/components/Maintenance";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { MDXProvider } from "@mdx-js/react";
import "@/styles/App.css";
import "@/styles/colors.css";
import "@/styles/typography.css";
import "@/styles/spacing.css";
import Card from "@/components/Card.tsx";
import Section from "@/layout/Section.tsx";
import ModuleList from "@/components/ModuleList.tsx";
import Module from "@/components/Module.tsx";
import CardList from "@/components/CardList.tsx";
import Accordion from "@/components/Accordion.tsx";
import IFrameWrapper from "@/components/IFrameWrapper.tsx";
import ColumnsSection from "@/layout/ColumnsSection.tsx";
import Column from "@/layout/Column.tsx";

const isMaintenance = import.meta.env.VITE_REACT_APP_MAINTENANCE === "true";
console.log(
  "VITE_REACT_APP_MAINTENANCE =",
  import.meta.env.VITE_REACT_APP_MAINTENANCE,
);

const mdxComponents = {
  Card: Card,
  CardList: CardList,
  Section: Section,
  ModuleList: ModuleList,
  Module: Module,
  Accordion: Accordion,
  IFrameWrapper: IFrameWrapper,
  ColumnsSection: ColumnsSection,
  Column: Column,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={`heading-1 ${props.className || ""}`} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={`heading-2 ${props.className || ""}`} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className={`heading-3 ${props.className || ""}`} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props} className={`heading-4 ${props.className || ""}`} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="body" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="body list" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="body list" {...props} />
  ),

  // Bonus: You can even hijack standard HTML tags!
  // h1: (props: any) => <h1 className="text-4xl text-blue-500" {...props} />,
  // a: (props: any) => <a className="custom-link" target="_blank" {...props} />
};

function App() {
  if (isMaintenance) {
    return <Maintenance />;
  }

  return (
    <MDXProvider components={mdxComponents}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </MDXProvider>
  );
}

export default App;
