# eslint-config-rxgx

ESLint configurations and bundles to enable rules and formatting based on:

* ESLint/recommended
* Prettier/recommended
* React/recommended _(requires `babel-eslint`)_

### Directions

1. Install the sharable config:

    ```
    npm i -D eslint-config-rxgx
    ```

2. Install dependencies

    To use the sharable config, the following dev dependencies are required:

    ```
    npm i -D babel-eslint \
      eslint \
      eslint-config-prettier \
      eslint-plugin-prettier \
      eslint-plugin-react \
      prettier
    ```

3. Add an ESLint config file, `.eslintrc`:

    ```json
    {
      "extends": "rxgx"
    }
    ```
