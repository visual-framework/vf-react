const gulp  = require('gulp');
const shell = require('gulp-shell');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Pull in some optional configuration from the package.json file, a la:
// "vfConfig": {
//   "vfName": "My Component Library",
//   "vfNameSpace": "myco-",
//   "vfComponentPath": "./src/components",
//   "vfComponentDirectories": [
//      "vf-core-components",
//      "../node_modules/your-optional-collection-of-dependencies"
//     NOTE: Don't forget to symlink: `cd components` `ln -s ../node_modules/your-optional-collection-of-dependencies`
//    ],
//   "vfBuildDestination": "./build",
//   "vfThemePath": "@frctl/mandelbrot"
// },
// all settings are optional
// todo: this could/should become a JS module
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync('./package.json'));
config.vfConfig = config.vfConfig || [];
global.vfName = config.vfConfig.vfName || "Visual Framework 2.0";
global.vfNamespace = config.vfConfig.vfNamespace || "vf-";
global.vfComponentPath = config.vfConfig.vfComponentPath || path.resolve('.', __dirname + '/components');
global.vfBuildDestination = config.vfConfig.vfBuildDestination || __dirname + '/temp/build-files';
global.vfThemePath = config.vfConfig.vfThemePath || './tools/vf-frctl-theme';
global.vfVersion = config.version || 'not-specified';
const componentPath = path.resolve('.', global.vfComponentPath).replace(/\\/g, '/');
const componentDirectories = config.vfConfig.vfComponentDirectories || ['vf-core-components'];
const buildDestionation = path.resolve('.', global.vfBuildDestination).replace(/\\/g, '/');

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);

// Watch folders for changess
gulp.task('watch', function() {
  gulp.watch(['./vf-components/**/*.scss', '!./vf-components/**/package.variables.scss'], gulp.parallel('vf-css'));
  gulp.watch(['./vf-components/**/*.js'], gulp.parallel('vf-scripts'));
});

gulp.task('mode:set-to-serve', function(done) {
  // Since we're not using the 11ty command line directly, we need to set the
  // `--serve` param manually
  // process.argv.push('--serve');
  // process.env.ELEVENTY_ENV = 'development';
  fractalBuildMode = 'server';
  done();
});

gulp.task('mode:set-to-build', function(done) {
  // Since we're not using the 11ty command line directly, we need to set the
  // `--serve` param manually
  // process.argv.push('--quiet');
  // process.env.ELEVENTY_ENV = 'production';
  done();
});

// run react in build mode
gulp.task('react:build', shell.task(
  ['react-scripts build']
));

// run react in dev mode
gulp.task('react:dev', shell.task(
  ['react-scripts start']
));

// Run Fractal and capture the components object
gulp.task('fractal', function(done) {
  global.vfBuilderPath   = __dirname + '/public/vf-core-components';
  // global.vfDocsPath      = __dirname + '/node_modules/\@visual-framework/vf-eleventy--extensions/fractal/docs';
  global.vfOpenBrowser   = false; // if you want to open a browser tab for the component library
  global.fractal         = require('@visual-framework/vf-core/fractal.js').initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly


  // gulp.task('vf-component', shell.task(
  //   ['yo ' + generatorPath]
  // ));

  function fractalReadyCallback(fractal) {
    global.fractal = fractal; // save fractal globally
    // global.eleventy = require('@11ty/eleventy/cmd.js');

    done();
  }
});

// Let's build this sucker.
let fractalBuildMode = 'build';
gulp.task('build', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'mode:set-to-build',
  // 'fractal',
  'react:build'
));

// Just build the assets, CSS and JS for VF components
gulp.task('build-vf-assets', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets')
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'mode:set-to-serve',
  // 'fractal',
  gulp.parallel('react:dev','watch')
));
