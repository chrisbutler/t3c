/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('stories', function (/* args */) {
  return Stories.find();
});

Meteor.publish('usernames', function (/* args */) {
  return Meteor.users.find({}, {fields: {id: true, 'person.name': true, 'person.id': true}});
});
