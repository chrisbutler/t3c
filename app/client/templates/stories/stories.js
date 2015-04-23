/*****************************************************************************/
/* Stories: Event Handlers */
/*****************************************************************************/
Template.Stories.events({
  'click .stories li': function(evt, tpl) {
    tpl.$('.open').not(evt.currentTarget).removeClass('open');
    $(evt.currentTarget).toggleClass('open');
  }
});

Template.MasonryStories.events({
  'click .masonry-container .masonry-element': function(evt, tpl) {
    console.log('click');
    tpl.$('.open').not(evt.currentTarget).removeClass('open');
    $(evt.currentTarget).toggleClass('open');
    tpl.$('.masonry-container').masonry();
  }
});

/*****************************************************************************/
/* Stories: Helpers */
/*****************************************************************************/
Template.Stories.helpers({
});

/*****************************************************************************/
/* Stories: Lifecycle Hooks */
/*****************************************************************************/
Template.Stories.created = function () {
};

Template.Stories.rendered = function () {
  console.log('stories rendered');
  // $('ul.stories').masonry({
  //   columnWidth: '.grid-sizing',
  //   percentPosition: true,
  //   itemSelector: '.stories li'
  // });
};

Template.Stories.destroyed = function () {
  console.log('stories destroyed');
};
