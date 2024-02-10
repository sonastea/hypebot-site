module.exports = {
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  overrides: [
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
  ],
};
