module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "no-console": "off",
    "global-require": "off",
    "comma-dangle": ["error", "never"]
  }
};
