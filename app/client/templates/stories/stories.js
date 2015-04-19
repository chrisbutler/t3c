/*****************************************************************************/
/* Stories: Event Handlers */
/*****************************************************************************/
Template.Stories.events({
  'click .stories li': function(evt, tpl) {
    tpl.$('.open').not(evt.currentTarget).removeClass('open');
    $(evt.currentTarget).toggleClass('open');
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
};

Template.Stories.destroyed = function () {
};
