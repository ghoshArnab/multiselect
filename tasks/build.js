/*******************************
          Build Task
*******************************/

var
  // dependencies
  gulp         = require('gulp-help')(require('gulp')),
  runSequence  = require('run-sequence'),

  // config
  config       = require('./config/user'),
  install      = require('./config/project/install'),

  // task sequence
  tasks        = []
;


// sub-tasks
if(config.rtl) {
  require('./collections/rtl')(gulp);
}
require('./collections/build')(gulp);


module.exports = function(callback) {

  console.info('Building pegaMultiselect');

  if( !install.isSetup() ) {
    console.error('Cannot find pegaMultiselect.json. Run "gulp install" to set-up pegaMultiselect');
    return 1;
  }

  // check for right-to-left (RTL) language
  if(config.rtl === true || config.rtl === 'Yes') {
    gulp.start('build-rtl');
    return;
  }

  if(config.rtl == 'both') {
    tasks.push('build-rtl');
  }

  tasks.push('build-javascript');
  tasks.push('build-css');
  tasks.push('build-assets');

  runSequence(tasks, callback);
};
