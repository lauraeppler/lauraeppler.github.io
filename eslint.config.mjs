import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,jsx,mjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,jsx,mjs"], plugins: { js }, extends: ["js/recommended"] },
  pluginReact.configs.flat.recommended,
]);
