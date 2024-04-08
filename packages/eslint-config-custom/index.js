module.exports = {
  extends: [
    "next",
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  ignorePatterns: ["node_modules", "dist", "build", "public", ".next"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
