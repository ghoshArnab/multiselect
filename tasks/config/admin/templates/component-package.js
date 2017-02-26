
Package.describe({
  name    : 'pegaMultiselect:ui-{component}',
  summary : 'pegaMultiselect UI - {Component}: Single component release',
  version : '{version}',
  git     : 'git://github.com/pegaMultiselect/UI-{Component}.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    {files}
  ], 'client');
});
