import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createBookmark(model) {
      const bookmark = this.store.createRecord('bookmark', model);
      bookmark.save().then((bookmark) => {
        this.transitionToRoute('bookmarks.bookmark', bookmark);
      });
    },
  },
});
