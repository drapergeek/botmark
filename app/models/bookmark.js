import DS from 'ember-data';

const { attr } = DS;

const Bookmark = DS.Model.extend({
  name: attr('string'),
  url: attr('string'),
});

Bookmark.reopenClass({
  FIXTURES: [
    {
      id: 1,
      url: 'http://github.com',
      name: 'Github',
    }
  ]
});

export default Bookmark;
