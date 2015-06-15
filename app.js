require.config({
  paths: {
    'a': 'bower_components/a/index',
    'king-dom': '/bower_components/king-dom/index'
  }
});

require(['a'], function (a) {
  'use strict';

  a('#content');
});
