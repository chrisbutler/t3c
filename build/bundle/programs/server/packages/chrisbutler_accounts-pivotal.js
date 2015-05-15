(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Accounts = Package['accounts-base'].Accounts;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var Future;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// packages/chrisbutler:accounts-pivotal/accounts-pivotal.js                                         //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
if (Meteor.isClient) {                                                                               // 1
  Meteor.loginWithPivotal = function(user, password, callback) {                                     // 2
    if (user && password) {                                                                          // 3
      Accounts.callLoginMethod({                                                                     // 4
        methodArguments: [{                                                                          // 5
          user: user,                                                                                // 6
          password: password,                                                                        // 7
          service: 'pivotal'                                                                         // 8
        }],                                                                                          // 9
        userCallback: function (error, result) {                                                     // 10
          if (error) {                                                                               // 11
            callback && callback(error);                                                             // 12
          } else {                                                                                   // 13
            callback && callback();                                                                  // 14
          }                                                                                          // 15
        }                                                                                            // 16
      });                                                                                            // 17
    }                                                                                                // 18
  };                                                                                                 // 19
}                                                                                                    // 20
                                                                                                     // 21
if (Meteor.isServer) {                                                                               // 22
  Accounts.addAutopublishFields({                                                                    // 23
    forLoggedInUser: ['services.pivotal'],                                                           // 24
    forOtherUsers: ['services.pivotal.username']                                                     // 25
  });                                                                                                // 26
                                                                                                     // 27
  Future = Npm.require('fibers/future');                                                             // 28
                                                                                                     // 29
  var NonEmptyString = Match.Where(function (x) {                                                    // 30
    check(x, String);                                                                                // 31
    return x.length > 0;                                                                             // 32
  });                                                                                                // 33
                                                                                                     // 34
  Accounts.registerLoginHandler("pivotal", function (options) {                                      // 35
    check(options, {                                                                                 // 36
      user: NonEmptyString,                                                                          // 37
      password: NonEmptyString,                                                                      // 38
      service: 'pivotal'                                                                             // 39
    });                                                                                              // 40
                                                                                                     // 41
    if (options.service === 'pivotal' && options.user && options.password) {                         // 42
      var response = new Future();                                                                   // 43
      HTTP.get("https://www.pivotaltracker.com/services/v5/me", {auth: options.user + ':' + options.password}, function (error, result) {
        if (error) {                                                                                 // 45
          response.return(error.response.data);                                                      // 46
        } else {                                                                                     // 47
          var d = result.data;                                                                       // 48
          if (_.indexOf([d.username, d.email], options.user) != -1) {                                // 49
            var serviceData = {                                                                      // 50
              username: d.username,                                                                  // 51
              email: d.email,                                                                        // 52
              id: d.id,                                                                              // 53
              token: d.api_token                                                                     // 54
            };                                                                                       // 55
            var opts = {                                                                             // 56
              profile: {                                                                             // 57
                name: d.name                                                                         // 58
              }                                                                                      // 59
            };                                                                                       // 60
            var user = Accounts.updateOrCreateUserFromExternalService('pivotal', serviceData, opts); // 61
            response.return({userId: user.userId});                                                  // 62
          } else {                                                                                   // 63
            response.return({error: 'Invalid Login.'});                                              // 64
          }                                                                                          // 65
        }                                                                                            // 66
      });                                                                                            // 67
      return response.wait();                                                                        // 68
    } else {                                                                                         // 69
      return undefined;                                                                              // 70
    }                                                                                                // 71
  });                                                                                                // 72
}                                                                                                    // 73
                                                                                                     // 74
///////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['chrisbutler:accounts-pivotal'] = {};

})();

//# sourceMappingURL=chrisbutler_accounts-pivotal.js.map
