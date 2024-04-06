import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    ignores: ["node_modules", "dist", "*.d.ts"],
  },
  {
    files: ["*.astro"],
    parser: "astro-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: "latest",
      sourceType: "module",
      extraFileExtensions: [".astro"],
    },
    processor: "astro/client-side-ts",
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];
