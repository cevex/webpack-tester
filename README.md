# webpack tester

This is a test project to enjoy the feature of webpack.

## Goals

* Bundle a typescript application with webpack
* Take advantage of Tree-shaking  by filtering unused class in final bundle
* Handle production errors with source-map
* Analysing how to decrease bundle size by using 'smart' import with lodash
* Allow quick development

## Tools

**Install :** `npm install`

**Start :** `npm start`

**Build :** `npm run build`

**Build production:** `npm run build-prod`

**Analyse bundle :** `npm run analyse` (on build-prod only)


## Usefull links : 

**Webpack**
* [webpack - Get Started](https://webpack.js.org/guides/getting-started/)
* [webpack - Work with Typescript](https://webpack.js.org/guides/typescript/)
* [webpack - Dev options](https://webpack.js.org/guides/development/)
* [webpack - Source map options](https://webpack.js.org/configuration/devtool/)

**Bundle analyser**
* [source-map-explorer](https://openbase.io/js/source-map-explorer)
* [Importing lodash correctly](https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark/)
* [Tree shaking with Webpack](https://alexjover.com/blog/tree-shaking-with-webpack-2-typescript-and-babel/)
