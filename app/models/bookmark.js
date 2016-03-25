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
      url: 'http://thoughtbot.com',
      name: 'thoughtbot',
    },
    {
      id: 2,
      url: 'https://github.com',
      name: 'GitHub',
    },
    {
      id: 3,
      url: 'https://twitter.com',
      name: 'Twitter',
    },
    {
      id: 4,
      url: 'https://goodreads.com',
      name: 'Good Reads',
    },
    {
      id: 5,
      url: 'https://pragprog.com',
      name: 'Pragmatic Programmers',
    },
    {
      id: 6,
      url: 'https://yahoo.com',
      name: 'Yahoo',
    },
    {
      id: 7,
      url: 'http://phoenixframework.org',
      name: 'Phoenix',
    },
  ]
});

export default Bookmark;
