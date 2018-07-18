# :construction_worker: eslint-config-rxgx

A brainless ESLint configuration to automatically apply the rules and formatting based on:

* ESLint/recommended
* Prettier/recommended
* React/recommended _(requires `babel-eslint`)_

If you do not use [Prettier](https://prettier.io), this config will ruin your life or—at the very least—trigger your teenage angst! For those who never want to have another discussion on code formatting, please continue.


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
