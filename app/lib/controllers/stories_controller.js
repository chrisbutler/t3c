var sort = {sort: {current_state: 1}};

StoriesController = RouteController.extend({
  onBeforeAction: function() {
    if (!this.params.user) {
      $('.user-nav li a').removeClass('active previously-selected');
    }
    this.next();
  },
  waitOn: function () {
    return [
      this.subscribe('stories'),
      this.subscribe('usernames')
    ];
  },
  onRun: function() {
    console.log('stories run')
    Meteor.call('/members/get');
    Meteor.call('/iteration/get');
    this.next();
  },
  data: function () {
    return Stories.find({story_type: {$ne: 'release'}}, sort);
  }
});

UserStoriesController = StoriesController.extend({
  data: function () {
    var q = {owner_ids: {$in: [Number(this.params.user)]}};
    var r = [
      //['all', Stories.find(q, sort)],
      ['accepted', Stories.find(_.extend({current_state: 'accepted'}, q), sort)],
      ['delivered', Stories.find(_.extend({current_state: 'delivered'}, q), sort)],
      ['finished', Stories.find(_.extend({current_state: 'finished'}, q), sort)],
      ['started', Stories.find(_.extend({current_state: 'started'}, q), sort)],
      ['unstarted', Stories.find(_.extend({current_state: 'unstarted'}, q), sort)]
    ];
    console.log(r);
    return r.reverse();
  },
  onAfterAction: function() {
    $('.user-nav li a.active').removeClass('active').addClass('previously-selected');
    $('[data-id=' + this.params.user + ']').addClass('active');
  }
});
