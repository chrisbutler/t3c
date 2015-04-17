Meteor.startup(function () {
  Pivotal.getCurrentIterations(Meteor.settings.pivotal.project, function(err, iteration){
    console.log(iteration, iteration[0].stories);
  });
});
