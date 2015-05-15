(function(){StoriesController = RouteController.extend({
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
    return Stories.find({}, {sort: {current_state: 1}});
  }
});

UserStoriesController = StoriesController.extend({
  data: function () {
    return Stories.find({owner_ids: {$in: [Number(this.params.user)]}}, {sort: {current_state: 1}});
  },
  onAfterAction: function() {
    $('.user-nav li a.active').removeClass('active').addClass('previously-selected');
    $('[data-id=' + this.params.user + ']').addClass('active');
  }
});

})();
