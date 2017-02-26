/*******************************
         Release Config
*******************************/

var
  requireDotFile = require('require-dot-file'),
  config,
  npmPackage,
  version
;


/*******************************
         Derived Values
*******************************/

try {
  config = requireDotFile('pegaMultiselect.json');
}
catch(error) {}


try {
  npmPackage = require('../../../package.json');
}
catch(error) {
  // generate fake package
  npmPackage = {
    name: 'Unknown',
    version: 'x.x'
  };
}

// looks for version in config or package.json (whichever is available)
version = (npmPackage && npmPackage.version !== undefined && npmPackage.name == 'Multiselect-Pega')
  ? npmPackage.version
  : config.version
;


/*******************************
             Export
*******************************/

module.exports = {

  title      : 'pegaMultiselect UI',
  repository : 'https://github.com/pegaMultiselect/Multiselect-Pega',
  url        : 'http://www.Multiselect-Pega.com/',

  banner: ''
    + ' /*' + '\n'
    + ' * # <%= title %> - <%= version %>' + '\n'
    + ' * <%= repository %>' + '\n'
    + ' * <%= url %>' + '\n'
    + ' *' + '\n'
    + ' * Copyright 2014 Contributors' + '\n'
    + ' * Released under the MIT license' + '\n'
    + ' * http://opensource.org/licenses/MIT' + '\n'
    + ' *' + '\n'
    + ' */' + '\n',

  version    : version

};
