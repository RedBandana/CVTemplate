import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends("plugin:jsx-a11y/recommended"),
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "max-len": ["warn", { code: 120 }]
    }
  },
  ...compat.extends("prettier")
];

export default eslintConfig;
