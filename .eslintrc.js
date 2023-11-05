module.exports = {
  parser: "babel-parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "react-app",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
