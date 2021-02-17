# vf-react

A React boilerplate for VF 2.0 projects. 

Demo: https://visual-framework.github.io/vf-react/

Notes:

- If you add a Visual Framework component, be sure to include it at `src/vf-components/vf-componenet-rollup/index.scss`
- Add custom CSS to `src/vf-components/vf-local-overrides/vf-local-overrides.scss`
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app), that brings certain advantages and limitations. If you want to escape those, read up on "[eject](https://create-react-app.dev/docs/available-scripts#npm-run-eject)"

Watchout for:

- Use `yarn` and not `npm`
- This is still in early development
- The building of VF component assets (CSS, JS, images, etc.) from `.vf-components` into `./build/vf-generated-assets` does not seem to be working after [#25](https://github.com/visual-framework/vf-react/pull/25)
- Gulp may eventually removed from this project
- We're still coming up with an approach on how to handle the use of VF JS inside React (probably we'll import the VF JS modules directly)

## Available scripts

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
