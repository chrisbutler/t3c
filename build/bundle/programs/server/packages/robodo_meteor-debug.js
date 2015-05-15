(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var debug;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/robodo:meteor-debug/server.js                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
debug = Npm.require('debug');                                        // 1
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['robodo:meteor-debug'] = {
  debug: debug
};

})();

//# sourceMappingURL=robodo_meteor-debug.js.map
