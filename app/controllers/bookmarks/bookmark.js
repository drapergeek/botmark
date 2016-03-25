import Ember from 'ember';

export default Ember.Controller.extend({
  domain: function() {
    const domainRegex = /\w+\.(com|net|org)/;
    const matchingRegex = domainRegex.exec(this.get('model.url'));

    if (matchingRegex) {
      return matchingRegex[0].split('.')[0];
    }
  }.property('model.url'),
});
