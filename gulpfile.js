const path = require('path');
const gulp  = require('gulp');
const shell = require('gulp-shell');

// Pull in optional configuration from the package.json file, a la:
const {componentPath, componentDirectories, buildDestionation} = require('@visual-framework/vf-config');

// Tasks to build/run vf-core component system
require('@visual-framework/vf-core/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);

// Watch folders for changes
gulp.task('watch', function() {
  // gulp.watch(['./vf-components/**/*.scss', '!./vf-components/**/package.variables.scss'], gulp.parallel('vf-css'));
  // gulp.watch(['./vf-components/**/*.js'], gulp.parallel('vf-scripts'));
});

// run react in build mode
gulp.task('react:build', shell.task(
  ['react-scripts build']
));

// run react in dev mode
gulp.task('react:dev', shell.task(
  ['react-scripts start']
));

// Let's build this sucker.
gulp.task('build', gulp.series(
  'vf-clean',
  gulp.parallel('vf-component-assets'),
  'react:build'
));

// Just build the assets, CSS and JS for VF components
gulp.task('build-vf-assets', gulp.series(
  'vf-clean',
  gulp.parallel('vf-component-assets')
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  gulp.parallel('vf-component-assets'),
  gulp.parallel('react:dev','watch')
));
