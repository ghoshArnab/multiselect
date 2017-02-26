var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'pegaMultiselect:ui',
  summary : 'pegaMultiselect UI - LESS Release of pegaMultiselect UI',
  version : '{version}',
  git     : 'git://github.com/pegaMultiselect/Multiselect-Pega-LESS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');
  api.use('less', 'client');

  api.addFiles([
    {files}
  ], 'client');

});
