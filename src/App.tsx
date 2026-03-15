import Maintenance from "@/components/Maintenance";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { MDXProvider } from "@mdx-js/react";
import "@/styles/App.css";
import Card from "./components/Card.tsx";
import Section from "./components/Section.tsx";
import ModuleList from "./components/ModuleList.tsx";
import Module from "./components/Module.tsx";

const isMaintenance = import.meta.env.VITE_REACT_APP_MAINTENANCE === "true";
console.log("VITE_REACT_APP_MAINTENANCE =", import.meta.env.VITE_REACT_APP_MAINTENANCE);

const mdxComponents = {
  Card: Card,
  Section: Section,
  ModuleList: ModuleList,
  Module: Module,

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
