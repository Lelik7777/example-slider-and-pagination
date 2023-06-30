# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

## Supplement to the base webpack configuration

- npm install --save-dev html-loader
- npm i clean-webpack-plugin
- npm install copy-webpack-plugin --save-dev

---

## stylelint-config-clean-order

- npm install stylelint stylelint-config-clean-order --save-dev
- create file in root directory .stylelintrc.json
{
  "extends": ["stylelint-config-clean-order"]
}
-  in package.json add script:  "style":"npx stylelint **/*.scss --fix"

---
