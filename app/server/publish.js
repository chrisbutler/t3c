/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('stories', function (/* args */) {
  var p = Meteor.settings.pivotal && Number(Meteor.settings.pivotal.project);
  return Stories.find({project_id: p});
});

Meteor.publish('usernames', function (/* args */) {
  var p = Meteor.settings.pivotal && Number(Meteor.settings.pivotal.project);
  return Meteor.users.find({'person.id': {$nin: [1350156, 228045]}, project_id: p}, {fields: {id: true, 'person.name': true, 'person.id': true}});
});
