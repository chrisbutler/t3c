(function(){/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
  '/iteration/get': function() {
    var project = Meteor.settings.pivotal.project;
    Pivotal.getCurrentIterations(project, Meteor.bindEnvironment( function(err, iteration) {
      var stories = iteration[0] && iteration[0].stories;
      console.log(stories);
      if (stories) {
        _.each(stories, function(story) {
          var s = Stories.upsert({id: story.id}, story);
          console.log(story, s);
        })
      }
    }, function(error) {console.log(error)}));
  },
  '/members/get': function() {
    var project = Meteor.settings.pivotal.project;
    Pivotal.getMemberships(project, Meteor.bindEnvironment( function(err, users) {
      console.log(users);
      if (users) {
        _.each(users, function(user) {
          var u = Meteor.users.upsert({id: user.id}, user);
          console.log(user, u);
        })
      }
    }, function(error) {console.log(error)}));
  }
});

})();
