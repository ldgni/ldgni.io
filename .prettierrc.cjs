module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  htmlWhitespaceSensitivity: "ignore",
  bracketSameLine: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/utils/(.*)$",
    "^@/lib/(.*)$",
    "^@/data/(.*)$",
    "^@/hooks/(.*)$",
    "^@/services/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/pages/(.*)$",
    "",
    "^[./]",
  ],
};
