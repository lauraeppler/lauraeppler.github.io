import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig(
  { ignores: ["dist", "build", "node_modules"] },

  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx,mjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  eslintConfigPrettier,
);
