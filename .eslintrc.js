module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard",
        'react-app'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [0, "never"],
        "react/jsx-filename-extension": [
            "error",
            {
              "extensions": [".js", ".jsx"]
            }
        ],
        "react/function-component-definition": [
            0,
            {
              namedComponents: "function-declaration",
            },
          ],
        "comma-dangle": 0,
        "react/prop-types": 0,
        "space-before-function-paren": 0,
        "no-trailing-spaces" : 1
    }

}
