module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "semi": "off",
    "quotes": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/name-property-casing": "off",
    "vue/attributes-order": "off",
    "vue/html-quotes": "off",
    "no-empty-pattern": "off",
    "object-shorthand": "off",
    "arrow-parens": "off",
    "vue/order-in-components": "off"
  }
}
