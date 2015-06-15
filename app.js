require.config({
  paths: {
    'a': 'bower_components/a/index',
    'b': 'bower_components/b/index',
    'king-dom': '/bower_components/king-dom/index'
  }
});

require(['a', 'b'], function (a, b) {
  'use strict';

  var aInterval = Math.floor(Math.random() * 1000);
  var bInterval = Math.floor(Math.random() * 1000);

  window.setInterval(function () {
    a('#content');
  }, aInterval);

  window.setInterval(function () {
    b('#content');
  }, bInterval);
});
