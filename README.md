### Installation
Make sure you have [npm](https://www.npmjs.org/) and [webpack](http://webpack.github.io/) installed globally

- `npm install` - install dependencies
- `npm run local` - run app locally, with hot reload
- Open up this url http://localhost:9001
- `npm run test` - run automated unit test
- `npm run build` - uglify & minify the source codes, before uploading to the server
- `npm run e2e-local` - to run automated protractor end to end testing

###Brief explanation about the code structure:
1. To understand the code starts analysing from `src/app.js` and then `src/core/index.js`

2. Each folder (i.e login, makeup-artist, photography, ..) has index.js
This is used for integrating all the relevant controllers, service & route files within that folder so that they can communicate each other.

3. `src/core/services/rest-api.service.js` is responsible for communicating with back end Rest API. I’m using restangular library to accomplish that.

4. `src/common` folder contains mainly static pages (FAQ, etc) 

5. `package.json` contains list of node modules packages. 
And, on `scripts` section, you will see build, local, test, e2e-local. 