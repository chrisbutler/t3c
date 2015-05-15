(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Pivotal, _pivotal;

(function () {

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// packages/chrisbutler:pivotaljs/pivotaljs.js                                     //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
_pivotal = Npm.require('pivotaljs');                                               // 1
                                                                                   // 2
if (Meteor.settings && Meteor.settings.pivotal && Meteor.settings.pivotal.token) { // 3
  Pivotal = new _pivotal(Meteor.settings.pivotal.token);                           // 4
} else {                                                                           // 5
  throw new Error('Please set pivotal.token in Meteor.settings');                  // 6
}                                                                                  // 7
                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['chrisbutler:pivotaljs'] = {
  Pivotal: Pivotal
};

})();

//# sourceMappingURL=chrisbutler_pivotaljs.js.map
