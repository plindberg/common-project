{
  "extends": "eslint:recommended",

  "env": {
    "es6": true
  },

  "ecmaFeatures": {
    "jsx": true
  },

  "rules": {
    "strict": [2, "global"],
    "semi": [2, "always"],

    // Style
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }]
  }
}
