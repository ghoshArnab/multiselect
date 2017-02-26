var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'pegaMultiselect:ui-css',
  summary : 'pegaMultiselect UI - CSS Release of pegaMultiselect UI',
  version : '{version}',
  git     : 'git://github.com/pegaMultiselect/Multiselect-Pega-CSS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addFiles([
    // icons
    'themes/default/assets/fonts/icons.eot',
    'themes/default/assets/fonts/icons.svg',
    'themes/default/assets/fonts/icons.ttf',
    'themes/default/assets/fonts/icons.woff',
    'themes/default/assets/fonts/icons.woff2',

    // flags
    'themes/default/assets/images/flags.png',

    // release
    'pegaMultiselect.css',
    'pegaMultiselect.js'
  ], 'client');

});
