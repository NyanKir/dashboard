module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,

    },
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [2, {
      namedComponents: 'function-declaration',
      unnamedComponents: 'function-expression',
    }],
    'react/jsx-no-constructed-context-values': 0,
    'no-unreachable': 0,
    'react/prop-types': 0,
    'import/no-cycle': 0,
    'react/style-prop-object': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'object-curly-spacing': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-no-useless-fragment': 0,
    'no-unused-vars': 0,
    'import/no-named-as-default': 0,
    'dot-notation': 0,
  },
};
