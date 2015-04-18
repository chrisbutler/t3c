Router.configure({
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
  controller: 'StoriesController',
  where: 'client'
});

Router.route('stories/:user', {
  name: 'userStories',
  template: 'Stories',
  controller: 'UserStoriesController',
  where: 'client'
});
