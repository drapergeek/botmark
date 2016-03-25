import Ember from 'ember';

export default Ember.Component.extend({
  baseUrl: function() {
    const domainRegex = /http:\/\/\w+\.(com|net|org)/;
    const matchingRegex = domainRegex.exec(this.get('bookmark.url'));
    if (matchingRegex) {
      return matchingRegex[0];
    }
  }.property('bookmark.url'),

  favicon: function() {
    return `${this.get('baseUrl')}/favicon.ico`;
  }.property('baseUrl'),
});