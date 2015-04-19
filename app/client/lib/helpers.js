Template.registerHelper('truncated', function(text) {
  return text && (text.substr(0, 65) + '...');
});

Template.registerHelper('nameFor', function(id) {
  var u = Meteor.users.findOne({'person.id': id});
  return u && u.person && u.person.name;
});

Template.registerHelper('members', function(id) {
  return Meteor.users.find();
});
