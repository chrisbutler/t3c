StoriesController = RouteController.extend({
  waitOn: function () {
    return [
      this.subscribe('stories'),
      this.subscribe('usernames')
    ];
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
    $('.user-nav li a.active').removeClass('active');
    $('[data-id=' + this.params.user + ']').addClass('active');
  }
});
