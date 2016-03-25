import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('bookmarks', { path: '/'}, function() {
    this.route('bookmark', { path: '/bookmarks/:id'});
    this.route('new', { path: '/bookmarks/new'});
  });
});

export default Router;
