module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: "module"
  },
  extends: [
    'plugin:vue/essential',
    "prettier"
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    "prettier"
  ],
  // add your custom rules here
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "prettier/prettier": [
      "error",
      {
        semi: false,
        printWidth: 120
      }
    ]
  }
};
