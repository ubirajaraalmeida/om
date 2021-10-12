module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
    "@babel/preset-env", {
      "useBuiltIns": "entry",
      "corejs": 3
    }
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    "@babel/plugin-proposal-json-strings"
  ]
}