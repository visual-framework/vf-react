# vf-react

A React boilerplate for VF 2.0 projects

Notes:

- Builds VF components (CSS, JS, images, etc.) from `.vf-components` into `./src/vf-generated-assets`
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app), that brings certain advantages and limitations. If you want to escape those, read up on "[eject](https://create-react-app.dev/docs/available-scripts#npm-run-eject)"

TBC:

- Use of VF Templates
- JS usage

## Available Scripts

In the project directory, you can run:

### `gulp build-vf-assets`

Build the assets, CSS and JS for VF components.

### `gulp dev`

- Build the assets, CSS and JS for VF components and watch for changes
- Run React in development mode

### `gulp build`

- Build the assets, CSS and JS for VF components
- Run React in build mode (yarn start)

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
