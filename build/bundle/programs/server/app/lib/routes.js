(function(){Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('stories', {
  name: 'stories',
  template: 'MasonryStories',
  controller: 'StoriesController',
  where: 'client'
});

Router.route('stories/:user', {
  name: 'userStories',
  template: 'MasonryStories',
  controller: 'UserStoriesController',
  where: 'client'
});


Router.route('webhooks/pivotal', {
  name: 'webhooksPivotal',
  controller: 'PivotalController',
  action: 'action',
  where: 'server'
});

})();
