HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  action: function() {
    //this.render('Home');
    Router.go('stories');
  }
});
